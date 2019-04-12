const path = require('path')
const fs = require('fs')

function resolve (...args) {
  return path.resolve( __dirname, '../', ...args)
}

function pagesEntry () {
  const entries = {};

  // src/views下的页面
  fs.readdirSync(resolve('./src/views')).forEach((dir) => {
    entries[`views/${dir}/index`] = resolve(`./src/views/${dir}/index.vue`);
  })

  // src/common/components下的页面
  fs.readdirSync(resolve('./src/components')).forEach((dir) => {
    let demoPath = resolve(`./src/components/${dir}/__demo__/App.vue`);

    fs.existsSync(demoPath) &&(entries[`pages/${dir}/index`] = resolve(demoPath));
  })

  return entries;
}

module.exports = {
  resolve,
  pagesEntry
}
