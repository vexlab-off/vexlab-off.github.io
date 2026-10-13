/**
 * VEX : scripts du site. JavaScript natif, aucune dépendance.
 */

document.addEventListener('DOMContentLoaded', () => {
  initClock();
  initScrollSpy();
  initContactForm();
});

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
    const position = window.scrollY + 140;
    let current = null;
    sections.forEach((section) => {
      if (position >= section.offsetTop) current = section.id;
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
    feedback.className = `text-sm ${ok ? 'text-charcoal-muted' : 'text-terracotta-hover'}`;
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
