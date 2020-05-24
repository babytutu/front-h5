module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'comma-dangle': [0]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
