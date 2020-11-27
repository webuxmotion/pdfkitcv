const config = require('../config');

module.exports = (doc, name, site, dates, left = 0, top = 0) => {doc
  .font('Helvetica-Bold')
  .fontSize(12)
  .text(name, config.padding.left + left, top)
  .font('Helvetica')
  .fontSize(10)
  .text(site, config.padding.left + left, top + 15, { underline: true })
  .text(dates, config.padding.left + left, top + 15 + 20)
}
