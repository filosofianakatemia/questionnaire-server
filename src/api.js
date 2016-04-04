'use strict'

const bodyParser = require('koa-bodyparser');
const route = require('koa-route');

module.exports = (config, app) => {

  // TODO: Remove relative path when questionnaire-core is published to npmjs.org
  const core = require('../../questionnaire-core/src/interface.js')(config.dbUrl,config.usedDatabase);

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

  async function updateQuestionnaire(ctx,uuid){
  	let payload = ctx.request.body;
    let responseFromCore = await core.updateQuestionnaire(uuid,payload);
    ctx.body = responseFromCore;
  }

  async function getQuestions(ctx,path){
  	let lang = this.query.lang;
    let responseFromCore = await core.getQuestions(path,lang);
    ctx.body = responseFromCore;
  }


  // ROUTES

  app.use(bodyParser());
  app.use(route.get('/v1/questionnaires', getQuestionnaires));
  app.use(route.put('/v1/questionnaires', putQuestionnaire));
  app.use(route.delete('/v1/questionnaires/:uuid', deleteQuestionnaire));
  app.use(route.get('/v1/questionnaires/:uuid', getQuestionnaire));
  app.use(route.post('/v1/questionnaires/:uuid/deploy', deployQuestionnaire));
  app.use(route.post('/v1/questionnaires/:uuid/close', closeQuestionnaire));
  app.use(route.put('/v1/questionnaires/:uuid', updateQuestionnaire));
  app.use(route.get('/v1/questions/:path',getQuestions));
}
