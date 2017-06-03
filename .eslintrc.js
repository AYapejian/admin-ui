module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
      'browser': true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'space-before-function-paren': 0,
    'no-warning-comments': [0, { 'terms': [ 'todo', 'fixme' ], 'location': 'start' }],
    // allow async-await
    'generator-star-spacing': 0,

    'indent': [ 1, 4, {
      'VariableDeclarator': {
        'var':   1,
        'let':   1,
        'const': 1
      }
    }],
    'key-spacing': [ 1, { 'align': 'value' } ],
    'no-multi-spaces': [ 0, {
      'exceptions': {
        'Property': true,
        'VariableDeclarator': true,
        'ImportDeclaration': true
      }
  }],
    'max-len': [ 1, 200, 4, {
      'ignoreComments': true
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
