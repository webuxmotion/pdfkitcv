const config = require('../config');

module.exports = (doc, title, list = [], left = 0, top = 0) => {doc
  .fontSize(12)
  .text(title, config.padding.left + left, top);

  let topListItem = 25;

  if (list.length) {
    doc.fontSize(10);

    list.forEach((item, i) => {
      doc.text('- ' + item, config.padding.left + left, top + topListItem - 5);
      topListItem += 15;
    })
  }
}
