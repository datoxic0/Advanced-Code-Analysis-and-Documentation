// Export code and analysis results
export function exportToPDF(content) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text(content, 10, 10);
  doc.save('analysis.pdf');
}

export function exportToDOCX(content) {
  import('docx').then(({ Document, Packer, Paragraph }) => {
    const doc = new Document({ sections: [{ properties: {}, children: [new Paragraph(content)] }] });
    Packer.toBlob(doc).then(blob => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'analysis.docx';
      link.click();
    });
  });
}