'use strict'

// Imports babel - auto transpiles the other stuff
require('babel-core/register')({
    presets: ["stage-0"],
    plugins: ["syntax-async-functions", "syntax-async-generators"],
    extensions: [".js"],
    // Only these files are included
    only: ['./src']
});

/**
 * Load development configuration file
 */
let config = require('./config-devel.js');
require('./src/server.js')(config); // this is es7 - gets transpiled
