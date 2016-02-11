'use strict'

/**
 * Module dependencies.
 */

// external
const Koa = require('koa');
const convert = require('koa-convert');
const logger = require('koa-logger');

module.exports = (config) => {

  /**
   * setup Koa
   */
  const app = new Koa();

  // debugging setup

  if (config.debug){
    app.use(convert(logger()));
  }

  // add server API

  require('./api.js')(config, app);

  // listen
  app.listen(config.port);
  console.log('listening on port ' + config.port);
}