'use strict'

const bodyParser = require('koa-bodyparser');
const route = require('koa-route');

module.exports = (config, app) => {

  // TODO: Remove relative path when questionnaire-core is published to npmjs.org
  const core = require('../../questionnaire-core/src/interface.js')(config.mongodbUrl);

  // API METHODS

  async function getQuestionnaires(ctx) {
    let responseFromCore = await core.getQuestionnaires();
    ctx.body = responseFromCore;
  }

  async function putQuestionnaire(ctx){
    let payload = ctx.request.body;
    let responseFromCore = await core.putQuestionnaire(payload);
    ctx.body = responseFromCore;
  }

  async function deleteQuestionnaire(ctx,uuid){
    let responseFromCore = await core.deleteQuestionnaire(uuid);
    ctx.body = responseFromCore;
  }

  async function getQuestionnaire(ctx,uuid){
    let responseFromCore = await core.getQuestionnaire(uuid);
    ctx.body = responseFromCore;
  }
  
  async function deployQuestionnaire(ctx,uuid){
    let responseFromCore = await core.deployQuestionnaire(uuid);
    ctx.body = responseFromCore;
  }
  
  async function closeQuestionnaire(ctx,uuid){
    let responseFromCore = await core.closeQuestionnaire(uuid);
    ctx.body = responseFromCore;
  }

  // ROUTES

  app.use(bodyParser());
  app.use(route.get('/questionnaires', getQuestionnaires));
  app.use(route.put('/questionnaire', putQuestionnaire));
  app.use(route.delete('/questionnaire/:uuid', deleteQuestionnaire));
  app.use(route.get('/questionnaire/:uuid', getQuestionnaire));
  app.use(route.post('/questionnaire/:uuid/deploy', deployQuestionnaire));
  app.use(route.post('/questionnaire/:uuid/close', closeQuestionnaire));
}
