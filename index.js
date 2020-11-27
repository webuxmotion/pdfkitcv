const PDFDocument = require('pdfkit');
const fs = require('fs');
const config = require('./config');
const titleSubtitle = require('./components/title-subtitle');
const line = require('./components/line');
const iconTitle = require('./components/icon-title');
const title = require('./components/title');
const text = require('./components/text');

// Create a document
const doc = new PDFDocument();

// Profile Image
doc.image('./images/avatar.png', config.padding.left, 20, { width: 50 });
const left = [100, 250, 420]
const top = [24, 60];
titleSubtitle(doc, 'Lastname and Firstname', 'Pereverziev Andrii', left[0], top[0]);
titleSubtitle(doc, 'How many years old?', '29 yrs', left[0], top[1]);
titleSubtitle(doc, 'Interested in position', 'Middle Front-end Developer', left[1], top[0]);
titleSubtitle(doc, 'Total commercial experience', '5 yrs', left[1], top[1]);
titleSubtitle(doc, 'Link to download CV', 'https://pereverziev.herokuapp.com/cv.pdf', left[2], top[0]);

const topIconTitle = 105;
iconTitle(doc, 'gmail.png', 'pereverziev.andrii@gmail.com', config.padding.left, topIconTitle);
iconTitle(doc, 'phone.png', '+38(095)134-33-38', config.padding.left + 180, topIconTitle);
iconTitle(doc, 'linkedin.png', 'pereverziev-andrii', config.padding.left + 310, topIconTitle);
iconTitle(doc, 'github.png', 'webuxmotion', config.padding.left + 435, topIconTitle);
line(doc, 120);

const topCore = 160;
const topTextCore = [topCore + 25, topCore + 45];
const leftTextCore = [0, 90, 230, 320, 400, 500];
title(doc, 'CORE COMPETENCIES', undefined, topCore);
title(doc, 'TECHNOLOGIES', 230, topCore);

text(doc, 'Frontend (4 yrs)', 0, topTextCore[0]);
text(doc, 'Backend (2 yrs)', 0, topTextCore[1]);
text(doc, 'Agile (3 yrs)', leftTextCore[1], topTextCore[0]);
text(doc, 'UI developing (5 yrs)', leftTextCore[1], topTextCore[1]);

text(doc, 'ReacJS (3 yrs)', leftTextCore[2], topTextCore[0]);
text(doc, 'HTML5 (5 yrs)', leftTextCore[3], topTextCore[0]);
text(doc, 'NodeJS (2 yrs)', leftTextCore[4], topTextCore[0]);
text(doc, 'GIT (4 yrs)', leftTextCore[5], topTextCore[0]);

text(doc, 'Javascript (4,5 yrs)', leftTextCore[2], topTextCore[1]);
text(doc, 'CSS3 (5 yrs)', leftTextCore[3], topTextCore[1]);
text(doc, 'LINUX/MacOS (4 yrs)', leftTextCore[4], topTextCore[1]);
text(doc, 'PHP (4 yrs)', leftTextCore[5], topTextCore[1]);
line(doc, topCore + 70);

doc.pipe(fs.createWriteStream('output.pdf'));

// Finalize PDF file
doc.end();
