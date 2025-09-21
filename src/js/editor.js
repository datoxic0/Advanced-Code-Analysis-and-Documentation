// Editor setup and logic
export function initEditor() {
  const editorEl = document.getElementById('editor');
  if (!editorEl) return;
  const aceEditor = ace.edit(editorEl);
  aceEditor.setTheme('ace/theme/github');
  aceEditor.session.setMode('ace/mode/javascript');
  aceEditor.setOptions({ fontSize: '16px', enableBasicAutocompletion: true });
  window.aceEditor = aceEditor;
}