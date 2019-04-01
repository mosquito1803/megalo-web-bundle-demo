const webpack = require('webpack');
const config = require('../webpack.config.web.prod')

const generateWebFiles = require('@megalo/target/lib/utils/generateWebFiles')

let compiler = webpack(config)

generateWebFiles().then(() => {
    compiler.run((err, stat) => {
        if (err) {
            console.log(err);
    
            return;
        }
    
        console.log('build succes')
    })
})