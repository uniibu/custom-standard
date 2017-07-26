// programmatic usage
var Linter = require('standard-engine').linter;

var opts = require('./custom.js');

module.exports = new Linter(opts);
