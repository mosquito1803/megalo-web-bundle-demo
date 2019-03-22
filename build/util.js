const path = require('path')
const fs = require('fs')

function resolve (...args) {
  return path.resolve( __dirname, '../', ...args)
}

function pagesEntry () {
  const entries = {};

  // src/views下的页面
  fs.readdirSync(resolve('./src/views')).forEach((dir) => {
    entries[`pages/${dir}/index`] = resolve(`./src/views/${dir}/index.ts`);
  })

  // src/common/components下的页面
  fs.readdirSync(resolve('./src/common/components')).forEach((dir) => {
    let demoPath = resolve(`./src/common/components/${dir}/__demo__/App.vue`);

    fs.existsSync(demoPath) &&(entries[`pages/${dir}/index`] = resolve(demoPath));
  })


  return entries;
}

module.exports = {
  resolve,
  pagesEntry
}
