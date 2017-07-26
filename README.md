# JavaScript Custom-Standard Style
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]

### Don't let others decide for you!

All the goodness of [feross/standard] with an option to set custom rules.

## Install

```bash
npm install customstandard
```

## Custom Rules

Add a `customstandard.rules` property to `package.json`:
```json
"customstandard": {
  "rules": {
    "space-before-function-paren": [2, "never"]
  }
}
```
## Rules

Importantly:

- Default semicolons.
- Check [feross/standard] for the rest of the rules.


## Usage

The easiest way to use JavaScript Custom-Standard Style to check your code is to install it
globally as a Node command line program. To do so, simply run the following command in
your terminal (flag `-g` installs `semistandard` globally on your system, omit it if you want
to install in the current working directory):

```bash
npm install customstandard -g
```

After you've done that you should be able to use the `customstandard` program. The simplest use
case would be checking the style of all JavaScript files in the current working directory:

```
$ customstandard
Error: Use JavaScript Custom-Standard Style
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```
### What you might do if you're clever

1. Add it to `package.json`

  ```json
  {
    "name": "my-cool-package",
    "devDependencies": {
      "customstandard": "*"
    },
    "scripts": {
      "test": "customstandard && node my-normal-tests-littered-with-custom-rules.js"
    }
  }
  ```

2. Check style automatically when you run `npm test`

  ```
  $ npm test
  Error: Code style check failed:
    lib/torrent.js:950:11: Expected '===' and instead saw '=='.
  ```

3. Never give style feedback on a pull request again!

### Custom Parser
To use a custom parser, install it from npm (example: `npm install
babel-eslint`) and add this to your package.json:

```json
{
  "customstandard": {
    "parser": "babel-eslint"
  }
}
```

### Ignoring files

Just like in `standard`, The paths `node_modules/**`, `*.min.js`, `bundle.js`, `coverage/**`, hidden files/folders
(beginning with `.`), and all patterns in a project's root `.gitignore` file are
automatically excluded when looking for `.js` files to check.

Sometimes you need to ignore additional folders or specific minfied files. To do that, add
a `customstandard.ignore` property to `package.json`:

```json
"customstandard": {
  "ignore": [
    "**/out/",
    "/lib/select2/",
    "/lib/ckeditor/",
    "tmp.js"
  ]
}
```

### Make it look `snazzy`
If you want prettier output, just install the [`snazzy`](https://github.com/feross/snazzy) package and pipe `customstandard` to it:

```bash
$ customstandard --verbose | snazzy
```

See [feross/standard] for more information.

[travis-image]: https://img.shields.io/travis/uniibu/customstandard.svg?style=flat-square
[travis-url]: https://travis-ci.org/uniibu/customstandard
[npm-image]: https://img.shields.io/npm/v/customstandard.svg?style=flat-square
[npm-url]: https://npmjs.org/package/customstandard
[downloads-image]: https://img.shields.io/npm/dm/customstandard.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/customstandard
[feross/standard]: https://github.com/feross/standard
