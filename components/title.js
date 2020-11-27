const config = require('../config');

module.exports = (doc, title, left = 0, top = 0) => {doc
  .fontSize(13)
  .text(title, config.padding.left + left, top)
}
