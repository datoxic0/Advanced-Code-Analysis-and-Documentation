// Entry point and initialization logic
import { initEditor } from './editor.js';
import { initTabs } from './tabs.js';
import { showToast } from './utils.js';
import { scanCode } from './scan.js';
import { setAccessibility } from './accessibility.js';

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initEditor();
  setAccessibility();
  document.getElementById('scan-btn')?.addEventListener('click', scanCode);
  showToast('App loaded successfully!', 'success');
});