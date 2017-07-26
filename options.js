var path = require('path');
var pkg = require('./package.json');
var mainpkg = require(path.resolve(pkg['_where'], 'package.json'));
module.exports = {
  // cmd, homepage, bugs all pulled from package.json
  cmd: 'customstandard',
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  extra_rules: mainpkg.customstandard ? mainpkg.customstandard.rules : null,
  tagline: 'Custom Standard For All!',
  eslint: require('eslint'),
  eslintConfig: {
    configFile: path.join(__dirname, 'eslintrc.json')
  }
};
