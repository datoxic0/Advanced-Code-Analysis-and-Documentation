// Editor setup using Ace Editor
export function setupEditor() {
  if (!window.ace) return;
  const editor = ace.edit('editor');
  editor.setTheme('ace/theme/monokai');
  editor.session.setMode('ace/mode/javascript');
  editor.setOptions({ fontSize: '14px', enableBasicAutocompletion: true });
  window.editorInstance = editor;
}