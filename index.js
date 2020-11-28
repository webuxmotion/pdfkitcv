const PDFDocument = require('pdfkit');
const fs = require('fs');

const config = require('./config');
const grid = require('./components/grid');
const avatar = require('./components/avatar');
const titleSubtitle = require('./components/title-subtitle');
const line = require('./components/line');
const iconTitle = require('./components/icon-title');
const title = require('./components/title');
const text = require('./components/text');
const company = require('./components/company');
const titleList = require('./components/title-list');

// Create a document
const doc = new PDFDocument({ autoFirstPage: false });
doc.addPage({
  margins: { top: 0, left: 0, right: 0, bottom: 0 }
})
doc.font('Helvetica');

//grid(doc);

avatar(doc, './images/avatar.png', 0, 20);
const leftSecondLine = 225; // Interested in position, TECHNOLOGIES, ReacJS (3 yrs), LANGUAGES
const leftThirdLine = 400; // Link to download CV, NodeJS (2 yrs), (8 mos)
const leftLastLine = 435;

const left = [65, leftSecondLine, leftThirdLine]
const top = [24, 60];
titleSubtitle(doc, 'Lastname and Firstname', 'Pereverziev Andrii', left[0], top[0]);
titleSubtitle(doc, 'How many years old?', '29 yrs', left[0], top[1]);
titleSubtitle(doc, 'Interested in position', 'Senior Front-end Developer', left[1], top[0]);
titleSubtitle(doc, 'Total commercial experience', '4 yrs 3 mos', left[1], top[1]);
titleSubtitle(doc, 'Link to download CV', 'https://pereverziev.herokuapp.com/cv.pdf', left[2], top[0]);

const topIconTitle = 105;
iconTitle(doc, 'gmail.png', 'pereverziev.andrii@gmail.com', 0, topIconTitle);
iconTitle(doc, 'phone.png', '+38(095)134-33-38', 180, topIconTitle);
iconTitle(doc, 'linkedin.png', 'pereverziev-andrii', 310, topIconTitle);
iconTitle(doc, 'github.png', 'webuxmotion', leftLastLine, topIconTitle);

const topCore = 145;
const topTextCore = [topCore + 25, topCore + 45];
const leftTextCore = [0, 90, leftSecondLine, 320, leftThirdLine, 500];
title(doc, 'CORE COMPETENCIES', 0, topCore);
title(doc, 'TECHNOLOGIES', leftSecondLine, topCore);

text(doc, 'Frontend (4 yrs)', 0, topTextCore[0]);
text(doc, 'Backend (2 yrs)', 0, topTextCore[1]);
text(doc, 'Agile (3 yrs)', leftTextCore[1], topTextCore[0]);
text(doc, 'UI developing (4 yrs)', leftTextCore[1], topTextCore[1]);

text(doc, 'ReacJS (3 yrs)', leftTextCore[2], topTextCore[0]);
text(doc, 'HTML5 (4 yrs)', leftTextCore[3], topTextCore[0]);
text(doc, 'NodeJS (2 yrs)', leftTextCore[4], topTextCore[0]);
text(doc, 'GIT (4 yrs)', leftTextCore[5], topTextCore[0]);

text(doc, 'Javascript (4 yrs)', leftTextCore[2], topTextCore[1]);
text(doc, 'CSS3 (4 yrs)', leftTextCore[3], topTextCore[1]);
text(doc, 'LINUX/MacOS (4 yrs)', leftTextCore[4], topTextCore[1]);
text(doc, 'PHP (4 yrs)', leftTextCore[5], topTextCore[1]);
line(doc, topCore + 70);

const topWork = 240;
const topStep = 80;
title(doc, 'WORK EXPERIENCE', 0, topWork);
company(doc, 'NEWAGE SOLUTIONS', 'https://newage.io', 'Mar 2020 - Oct 2020', 0, topWork + 40);
company(doc, 'AGRICHAIN', 'https://agrichain.top', 'Jul 2019 - Jan 2020', 0, topWork + 40 + topStep);
company(doc, 'PDFFILLER, INC', 'https://pdffiller.com', 'Jan 2018 - Jan 2019', 0, topWork + 40 + topStep * 2);
company(doc, 'SOFTERMII', 'https://www.softermii.com', 'May 2017 - Sep 2017', 0, topWork + 40 + topStep * 3);
company(doc, 'PEREVOROT', 'http://perevorot.com', 'Sep 2015 - Mar 2017', 0, topWork + 40 + topStep * 4);

const leftTitleList = 180;
titleList(doc, 'Middle Full-stack Developer', [
  'Create GraphQL Datasources',
  'Support React Micro Apps',
  'Update UI Library'
], leftTitleList, topWork + 40);

titleList(doc, 'Middle Front-end Developer', [
  'Refactor existing app with React',
  'Support Vanilla JS project',
], leftTitleList, topWork + 40 + topStep);

titleList(doc, 'Middle Front-end Developer', [
  'Create UI-system for core projects',
  'Support old UI-system',
], leftTitleList, topWork + 40 + topStep * 2);

titleList(doc, 'Front-end Developer', [
  'Create BEM-blocks for projects',
  'Create project with Angular',
], leftTitleList, topWork + 40 + topStep * 3);

titleList(doc, 'Web Developer', [
  'Create HTML Markup for projects',
  'Fix bugs on existing projects',
], leftTitleList, topWork + 40 + topStep * 4);

text(doc, '(8 mos)', leftThirdLine, topWork + 40);
text(doc, '(7 mos)', leftThirdLine, topWork + 40 + topStep);
text(doc, '(1 yr)', leftThirdLine, topWork + 40 + topStep * 2);
text(doc, '(5 mos)', leftThirdLine, topWork + 40 + topStep * 3);
text(doc, '(1 yr 7 mos)', leftThirdLine, topWork + 40 + topStep * 4);

line(doc, topWork + 40 + topStep * 4 + 60);

const topEducation = 685;
title(doc, 'EDUCATION', 0, topEducation);
company(doc, 'PGASA', 'https://pgasa.dp.ua', '2009 - 2014 (Bachelor in Architecture)', 0, topEducation + 30);

const leftLanguages = [leftSecondLine, 330, leftLastLine];
title(doc, 'LANGUAGES', leftLanguages[0], topEducation);
titleList(doc, 'English', ['Intermediate'], leftLanguages[0], topEducation + 30);
titleList(doc, 'Ukrainian', ['Native'], leftLanguages[1], topEducation + 30);
titleList(doc, 'Italian', ['Basic'], leftLanguages[2], topEducation + 30);

doc.pipe(fs.createWriteStream('output.pdf'));

// Finalize PDF file
doc.end();
