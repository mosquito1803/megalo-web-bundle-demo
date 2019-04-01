const nodemon = require('nodemon');
const path = require('path');

nodemon({
    script: path.join(__dirname, './dev.js'),
    watch: [path.join(__dirname, '../../src/app.js'), path.join(__dirname, '../../src/App.vue')]
});

nodemon.on('restart', function (files) {
    console.log('App restarted due to: ', files);
});