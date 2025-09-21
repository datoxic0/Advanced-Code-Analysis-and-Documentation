// Tabbed UI logic
export function setupTabs() {
  const tabs = document.querySelectorAll('[role="tab"]');
  const panels = document.querySelectorAll('[role="tabpanel"]');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
      tab.setAttribute('aria-selected', 'true');
      panels.forEach(panel => panel.hidden = panel.getAttribute('aria-labelledby') !== tab.id);
    });
  });
  // Initialize first tab as selected
  if (tabs.length) tabs[0].setAttribute('aria-selected', 'true');
  panels.forEach(panel => panel.hidden = panel.getAttribute('aria-labelledby') !== tabs[0].id);
}