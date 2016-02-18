'use strict'

/**
 * Module dependencies.
 */

// external
const Koa = require('koa');
const logger = require('koa-logger');

module.exports = (config) => {

  /**
   * setup Koa
   */
  const app = new Koa();

  // debugging setup

  if (config.debug){
    app.use(logger());
  }

  // add server API

  require('./api.js')(config, app);

  // listen
  app.listen(config.port);
  console.log('listening on port ' + config.port);
}