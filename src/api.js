'use strict'

const bodyParser = require('koa-bodyparser');
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

  async function putQuestionnaire(ctx){
    console.log('PUT /questionnaire');

    console.log('DEBUG PRINT PAYLOAD REMOVE ME: ');
    console.log(ctx.request.body);

    let responseFromPutQuestionnaire = await core.putQuestionnaire();
    ctx.body = responseFromPutQuestionnaire;
  }

  // ROUTES

  app.use(bodyParser());
  app.use(route.get('/questionnaires', getQuestionnaires));
  app.use(route.put('/questionnaire', putQuestionnaire));
}