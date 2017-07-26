var path = require('path');
var pkg = require('./package.json');

module.exports = {
  // cmd, homepage, bugs all pulled from package.json
  cmd: 'customstandard',
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  extra_rules: pkg.customstandard ? pkg.customstandard.rules : null,
  tagline: 'Custom Standard For All!',
  eslint: require('eslint'),
  eslintConfig: {
    configFile: path.join(__dirname, 'eslintrc.json')
  }
};
