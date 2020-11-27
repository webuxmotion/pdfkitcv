module.exports = (doc, icon, title, left = 0, top = 0) => {doc
  .image('images/' + icon, left, top, { width: 10 })
  .fontSize(9)
  .text(title, left + 14, top + 1)
}
