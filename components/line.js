const config = require('../config');

module.exports = (doc, top = 0) => {doc
  .moveTo(config.padding.left, top)
  .lineTo(config.padding.right, top)
  .strokeColor('#dadada')
  .stroke();
}
