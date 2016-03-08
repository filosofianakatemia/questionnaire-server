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

  async function getQuestionnaire(ctx,uuid){
    let responseFromGetQuestionnaire = await core.getQuestionnaire(uuid);
    ctx.body = responseFromGetQuestionnaire;
  }

  // ROUTES

  app.use(bodyParser());
  app.use(route.get('/questionnaires', getQuestionnaires));
  app.use(route.put('/questionnaire', putQuestionnaire));
  app.use(route.delete('/questionnaire/:uuid', deleteQuestionnaire));
  app.use(route.get('/questionnaire/:uuid', getQuestionnaire));
}
