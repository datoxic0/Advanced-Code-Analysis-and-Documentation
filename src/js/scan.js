// Basic code scan logic
import { fetchAnalysis } from './api.js';
import { showToast } from './utils.js';

export async function scanCode() {
  const code = window.editorInstance ? window.editorInstance.getValue() : '';
  showToast('Scanning code...', 'info');
  const analysis = await fetchAnalysis(code);
  document.getElementById('analysis-summary').textContent = analysis.summary;
  document.getElementById('analysis-issues').innerHTML =
    analysis.issues.length ? analysis.issues.map(issue => `<li>${issue}</li>`).join('') : '<li>No issues found.</li>';
  showToast('Scan complete!', 'success');
}