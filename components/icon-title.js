const config = require('../config');

module.exports = (doc, icon, title, left = 0, top = 0) => {doc
  .image('images/' + icon, config.padding.left + left, top, { width: 10 })
  .fontSize(9)
  .text(title, config.padding.left + left + 14, top + 1)
}
