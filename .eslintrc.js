// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
     "sourceType": "module"
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: [
    'react',
    ["transform-class-properties", { "spec": true }]
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },

  globals: { },
}
