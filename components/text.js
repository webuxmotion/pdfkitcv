const config = require('../config');

module.exports = (doc, title, left, top = 0) => {doc
  .fontSize(9)
  .text(title, config.padding.left + left, top, { width: 200 });
}
