var modelParser = require('./model-parser');

module.exports = function(model, config) {
  var config = config || {};
  return modelParser(model, config);
};