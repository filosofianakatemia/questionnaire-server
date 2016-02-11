'use strict'

const route = require('koa-route');

module.exports = (config, app) => {

  // TODO: Remove relative path when questionnaire-core is published to npmjs.org
  const core = require('../../questionnaire-core/src/interface.js')(config.mongodbUrl);

  // API METHODS

  async function getQuestionnaires(ctx) {
    console.log('GET /questionnaires');
    /*
    var responseWithJSON = function(data){
      response.end(JSON.stringify(data));
    };

    response.writeHead(200, {"Content-Type": "application/json"});
    var responseWithJSON = function(data){
      response.end(JSON.stringify(data));
    };
    core.findRestaurants(responseWithJSON);
  */
    let responseFromGetQuestionnaires = await core.getQuestionnaires();
    ctx.body = responseFromGetQuestionnaires;
  }

  // ROUTES

  app.use(route.get('/questionnaires', getQuestionnaires));
}