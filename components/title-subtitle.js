const config = require('../config');

module.exports = (doc, title, subtitle, left = 0, top = 0) => {doc
  .fontSize(12)
  .text(title, config.padding.left + left, top)
  .fontSize(8)
  .text(subtitle, {
    left, 
    top: top + 15,
    width: 200
  })
}
