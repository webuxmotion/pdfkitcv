const config = require('../config');

module.exports = (doc) => {

const verticalLinesCount = Math.floor(doc.page.width / 100);
const horizontalLinesCount = Math.floor(841 / 100);

doc.strokeColor('#ffcfcf');

for (let i = 0; i < verticalLinesCount; i++) {
  doc
    .moveTo(config.padding.left + i * 100, 0)
    .lineTo(config.padding.left + i * 100, doc.page.height)
    .stroke()

    .save()
    .rotate(-90)
    .fontSize(8)
    .fillColor('#ffa4a4')
    .text(i * 100, -20, 3 + config.padding.left + i * 100)
    .restore()
}

doc.strokeColor('#ffcfcf');

for (let i = 1; i < horizontalLinesCount; i++) {
  doc
    .save()
    .fontSize(8)
    .fillColor('#ffa4a4')
    .text(i * 100, 3 + config.padding.right, -3 + i * 100)
    .restore()
    .moveTo(config.padding.left, i * 100)
    .lineTo(config.padding.right, i * 100)
    .stroke(config.padding.right)
}

doc
  .moveTo(config.padding.right, 0)
  .lineTo(config.padding.right, doc.page.height)
  .stroke()
  .save()
  .rotate(-90)
  .fontSize(8)
  .fillColor('#ffa4a4')
  .text(config.padding.right - config.padding.left, -20, 3 + config.padding.right)
  .restore()

doc
  .save()
  .rotate(-90)
  .fontSize(8)
  .fillColor('#ffa4a4')
  .text('config.padding.left', -200, config.padding.left - 10)
  .restore()
}
