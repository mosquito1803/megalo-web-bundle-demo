const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const express = require('express');
const portfinder = require('portfinder');
const opn = require('opn');
const app = express();
const ip = require('ip')
const generateWebFiles = require('@megalo/target/lib/utils/generateWebFiles')

function run () {
    const webpackConfig = require(`../webpack.config.web.js`);

    app.use(devMiddleware(webpack(webpackConfig), {
        publicPath: webpackConfig.output.publicPath,
        stats: 'errors-only'
    }));
    // app.use(hotMiddleware(webpack(webpackConfig), {
    //     path: `/__webpack_hmr`
    // }));

    portfinder.basePort = 8080;
    portfinder.getPortPromise().then(function (port) {
        app.listen(port, function(){
            opn(`http://${ip.address()}:${port}/`);
        });
    });
}

generateWebFiles().then(run)
