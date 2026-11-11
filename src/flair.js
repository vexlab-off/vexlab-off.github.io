/**
 * La suite flair : le lanceur. Les trois tuiles sont des onglets (ARIA) ;
 * choisir une app affiche sa fenêtre. Flèches, Origine et Fin au clavier,
 * comme dans les apps. JavaScript natif, aucune dépendance.
 */

function initLauncher() {
  const list = document.getElementById('launcher');
  if (!list) return;
  const tabs = Array.from(list.querySelectorAll('[role="tab"]'));
  const title = document.getElementById('window-title');

  const select = (tab, focus) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls'));
      if (!panel) return;
      if (on) {
        const wasHidden = panel.hidden;
        panel.hidden = false;
        if (wasHidden) {
          panel.classList.remove('entering');
          void panel.offsetWidth;
          panel.classList.add('entering');
        }
        if (title && panel.dataset.title) title.innerHTML = panel.dataset.title;
      } else {
        panel.hidden = true;
      }
    });
    if (focus) tab.focus();
    if (history.replaceState) history.replaceState(null, '', '#' + tab.getAttribute('aria-controls'));
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(tab, false));
    tab.addEventListener('keydown', (event) => {
      let next = null;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = tabs[(i + 1) % tabs.length];
      else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = tabs[(i - 1 + tabs.length) % tabs.length];
      else if (event.key === 'Home') next = tabs[0];
      else if (event.key === 'End') next = tabs[tabs.length - 1];
      if (next) {
        event.preventDefault();
        select(next, true);
      }
    });
  });

  // A link to #app-flaircode (or #app-flairweb) opens that app.
  const fromHash = tabs.find((t) => '#' + t.getAttribute('aria-controls') === location.hash);
  if (fromHash) select(fromHash, false);
}

document.addEventListener('DOMContentLoaded', initLauncher);
