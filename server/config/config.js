'use strict';
const nconf = require('nconf');
//
nconf.argv()
    .env()
    .file({ file: './config.json' });

module.exports = nconf;