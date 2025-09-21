// Accessibility enhancements
export function setupAccessibility() {
  // Focus management for tabs
  const tabs = document.querySelectorAll('[role="tab"]');
  tabs.forEach(tab => {
    tab.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const idx = Array.from(tabs).indexOf(tab);
        const newIdx = e.key === 'ArrowRight'
          ? (idx + 1) % tabs.length
          : (idx - 1 + tabs.length) % tabs.length;
        tabs[newIdx].focus();
      }
    });
  });
}