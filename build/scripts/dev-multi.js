const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const express = require('express');
const portfinder = require('portfinder');
const opn = require('opn');
const dirs = getDirs(path.join(__dirname, '../../src/pages'));
const app = express();
const ip = require('ip')

const webpackConfig = require(`../webpack.config.web.dev.js`);

dirs.forEach(function(dir, index) {
    let _config = new webpackConfig(dir);

    app.use(devMiddleware(webpack(_config), {
        publicPath: _config.output.publicPath
    }));
    app.use(hotMiddleware(webpack(_config), {
        path: `/${dir}/__webpack_hmr`
    }));
    // app.use(`/${dir}/mock`, express.static(path.join(__dirname, '../../mock')));
});

// app.use('/mock', express.static(path.join(__dirname, '../../mock')));

portfinder.basePort = 8080;
portfinder.getPortPromise().then(function (port) {
    app.listen(port, function(){
        opn(`http://${ip.address()}:${port}/${dirs[0]}`);
    });
});

function getDirs(_dir) {
    return fs.readdirSync(_dir)
        .filter((_file) => {
            return fs.statSync(path.join(_dir, _file)).isDirectory() && _file != 'common' && _file != 'lib';
        })
}