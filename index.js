const PDFDocument = require('pdfkit');
const fs = require('fs');

// Create a document
const doc = new PDFDocument();

// Profile Image
doc
  .image('cv.png', 20, 20, { width: 50 });

doc
  .text('Lastname and Firstname', 100, 20)
  .fontSize(8)
  .text('Pereverziev Andrii', 100, 35)


doc.pipe(fs.createWriteStream('output.pdf'));

// Finalize PDF file
doc.end();
