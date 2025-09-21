// Main app initialization
import { setupTabs } from './tabs.js';
import { setupEditor } from './editor.js';
import { setupAccessibility } from './accessibility.js';
import { showToast } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  setupTabs();
  setupEditor();
  setupAccessibility();
  showToast('App loaded successfully!', 'success');
});