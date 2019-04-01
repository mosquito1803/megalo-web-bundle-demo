module.exports = {
    root: true,
    parserOptions: {
      parser: 'babel-eslint'
    },
    env: {
      browser: true,
    },
    extends: ['plugin:vue/essential'],
    // required to lint *.vue files
    plugins: [
      'vue'
    ],
    rules: {
      'vue/no-parsing-error':  [2, {
        "x-invalid-end-tag": false
      }]
    }
  }
  