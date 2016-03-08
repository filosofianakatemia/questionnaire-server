'use strict'

const bodyParser = require('koa-bodyparser');
const route = require('koa-route');

module.exports = (config, app) => {

  // TODO: Remove relative path when questionnaire-core is published to npmjs.org
  const core = require('../../questionnaire-core/src/interface.js')(config.mongodbUrl);

  // API METHODS

  async function getQuestionnaires(ctx) {
    let responseFromGetQuestionnaires = await core.getQuestionnaires();
    ctx.body = responseFromGetQuestionnaires;
  }

  async function putQuestionnaire(ctx){
    let payload = ctx.request.body;
    let responseFromPutQuestionnaire = await core.putQuestionnaire(payload);
    ctx.body = responseFromPutQuestionnaire;
  }
  
  async function deleteQuestionnaire(ctx,uuid){
    let responseFromDeleteQuestionnaire = await core.deleteQuestionnaire(uuid);
    ctx.body = responseFromDeleteQuestionnaire;
  }

  // ROUTES

  app.use(bodyParser());
  app.use(route.get('/questionnaires', getQuestionnaires));
  app.use(route.put('/questionnaire', putQuestionnaire));
  app.use(route.delete('/questionnaire/:uuid', deleteQuestionnaire));
}