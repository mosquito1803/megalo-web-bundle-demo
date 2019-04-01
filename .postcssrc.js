module.exports = {
    plugins: {
      'autoprefixer': {},
      'postcss-plugin-px2rem': { 
        rootValue: 75,
        propBlackList: ['border']
      }
    }
  }