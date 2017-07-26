var fs = require('fs');
var path = require('path');
var opts = require('./options.js');

function opts() {
  var eslintrc = fs.readFileSync(opts.eslintConfig.configFile, {encoding: 'utf8'});
  var dir = path.dirname(opts.eslintConfig.configFile);
  var tempdir = path.resolve(dir, 'custom_eslint.json');
  eslintrc = JSON.parse(eslintrc);
  if (opts.extra_rules) {
    eslintrc.rules = opts.extra_rules;
  }
  fs.writeFileSync(tempdir, JSON.stringify(eslintrc, null, 2));
  opts.eslintConfig.configFile = tempdir;
  return opts;
}

module.exports = opts();
