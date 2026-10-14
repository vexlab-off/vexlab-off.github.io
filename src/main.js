/**
 * VEX : scripts du site. JavaScript natif, aucune dépendance.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initClock();
  initScrollSpy();
  initContactForm();
  initCopyEmail();
});

/* Gestion du thème clair / sombre */
function initTheme() {
  const toggles = document.querySelectorAll('[data-theme-toggle]');
  const root = document.documentElement;

  const applyTheme = (isDark) => {
    if (isDark) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', isDark ? '#151413' : '#F7F2E7');
    }

    toggles.forEach((btn) => {
      btn.setAttribute('aria-label', isDark ? 'Passer au thème clair' : 'Passer au thème sombre');
      btn.setAttribute('title', isDark ? 'Passer au thème clair' : 'Passer au thème sombre');
    });
  };

  toggles.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isDark = !root.classList.contains('dark');
      try {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      } catch (_) {}
      applyTheme(isDark);
    });
  });

  const currentDark = root.classList.contains('dark');
  applyTheme(currentDark);

  try {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        applyTheme(e.matches);
      }
    });
  } catch (_) {}
}

/* Heure de Paris dans le header */
function initClock() {
  const clock = document.getElementById('paris-clock');
  if (!clock) return;

  const formatter = new Intl.DateTimeFormat('fr-FR', {
    timeZone: 'Europe/Paris',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const update = () => {
    clock.textContent = formatter.format(new Date());
  };

  update();
  setInterval(update, 1000);
}

/* Soulignement du lien de navigation correspondant à la section visible */
function initScrollSpy() {
  const links = document.querySelectorAll('.nav-link');
  const sections = [...links]
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!sections.length) return;

  const setActive = (id) => {
    links.forEach((link) => {
      const active = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('text-terracotta', active);
      link.classList.toggle('text-charcoal', !active);
      const indicator = link.querySelector('.nav-indicator');
      if (indicator) indicator.style.transform = active ? 'scaleX(1)' : 'scaleX(0)';
    });
  };

  const onScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Si on est tout en bas de la page, activer la dernière section (contact)
    if (documentHeight - scrollPosition < 40) {
      const lastSection = sections[sections.length - 1];
      if (lastSection) {
        setActive(lastSection.id);
        return;
      }
    }

    const position = window.scrollY + 140;
    let current = sections[0].id;
    sections.forEach((section) => {
      if (position >= section.offsetTop) {
        current = section.id;
      }
    });
    setActive(current);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* Formulaire : validation puis ouverture du client mail (aucun envoi serveur) */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('contact-feedback');
  if (!form) return;

  const show = (message, ok) => {
    feedback.textContent = message;
    feedback.classList.remove('hidden');
    feedback.className = `text-sm ${ok ? 'text-charcoal-muted' : 'text-terracotta'}`;
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (!name || !message) {
      show('Renseignez votre nom et votre message.', false);
      return;
    }
    if (!form.elements.email.checkValidity() || !email) {
      show('Renseignez une adresse email valide.', false);
      return;
    }

    const subject = encodeURIComponent(`Contact depuis le site : ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${form.dataset.email}?subject=${subject}&body=${body}`;
    show('Votre application mail va s\'ouvrir.', true);
  });
}

/* Copie de l'adresse email dans le presse-papier */
function initCopyEmail() {
  const btn = document.getElementById('copy-email-btn');
  const feedback = document.getElementById('copy-feedback');
  if (!btn || !feedback) return;

  const email = 'louka.vex@gmail.com';
  let timeoutId = null;

  btn.addEventListener('click', async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      feedback.textContent = 'Adresse copiée';
      feedback.classList.remove('opacity-0');
      feedback.classList.add('opacity-100');

      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        feedback.classList.remove('opacity-100');
        feedback.classList.add('opacity-0');
        setTimeout(() => {
          if (feedback.classList.contains('opacity-0')) {
            feedback.textContent = '';
          }
        }, 200);
      }, 2500);
    } catch (_) {
      feedback.textContent = 'Erreur lors de la copie';
      feedback.classList.remove('opacity-0');
      feedback.classList.add('opacity-100');
    }
  });
}
