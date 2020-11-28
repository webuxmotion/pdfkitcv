const config = require('../config');

module.exports = (doc, image, left = 0, top = 0) => {
doc
  .image(image, config.padding.left + left, top, { width: 50 });
}
