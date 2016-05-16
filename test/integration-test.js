module.exports = function(ops) {

// code snippet from internet

  if(ops.dblink) {
    dblink = ops.dblink;
  }
  else {
    if('development' == app.get('env'))
      dblink = process.env.MONGOHQ_URL || 'mongodb://localhost/node_dev'
  }
}

describe("Integration Test", function() {

  var taskFactory = function(ops) {

    return require('./../../../config/app')(ops);
  }

  var baseOps = function(ops) {
    return {
      'task':'migrate',
      'collection':ops.collection,
      'conn': {
        host: 'localhost',
        database: ops.database,
        user: 'root',
        password: 'root'
      },
      'dblink': 'mongodb://localhost/' + ops.mongodb,
      'stayalive':true
    }
  };

  before(function(next) {
    /*
    console.log('drop database before testing');
    */
    next();
  });


// Unfinished integration tests

var chakram = require('chakram'),
  expect = chakram.expect;

describe("getQuestionnaire", function(){
  it("Should print out all of the existing questionnaires ", function() {
    var response = chakram.get("http://localhost:3000/v1/questionnaires");
    expect(response).to.have.status(200);

    return chakram.wait();
    });
  });

describe("putQuestionnaire", function(){
  it("Should add a new questionnaire into the database ", function() {
    var response = chakram.get("http://localhost:3000/v1/questionnaires");
    expect(response).to.have.status(200);

    return chakram.wait();
    });
  });

describe("deleteQuestionnaire", function(){
  it("Should delete questionnaire specified by UUID from the database ", function() {
    var response = chakram.get("http://localhost:3000/v1/questionnaires");
    expect(response).to.have.status(200);

    return chakram.wait();
    });
  });

describe("getQuestionnaire[UUID]", function(){
  it("Should print out questionnaire with a specified UUID ", function() {
    var response = chakram.get("http://localhost:3000/v1/questionnaires");
    expect(response).to.have.status(200);

    return chakram.wait();
    });
  });

describe("deployQuestionnaire", function(){
  it("Should update the status of the questionnaire to deployed ", function() {
      var response = chakram.get("http://localhost:3000/v1/questionnaires");
      expect(response).to.have.status(200);

      /*
      expect(response).to.have.header("content-type", "application/json");
      */

      return chakram.wait();
    });
  });

describe("closeQuestionnaire", function(){
  it("Should update the status of the questionnaire to closed ", function() {
    var response = chakram.get("http://localhost:3000/v1/questionnaires");
    expect(response).to.have.status(200);

    /*
    expect(response).to.have.header("content-type", "application/json");
    */

    return chakram.wait();
    });
  });

describe("updateQuestionnaire", function(){
  it("Should update the changes made to a specific questionnaire ", function() {
    var response = chakram.get("http://localhost:3000/v1/questionnaires");
    expect(response).to.have.status(200);

    return chakram.wait();
    });
  });

describe("getQuestions", function(){
  it("Should print out the questions of a questionnaire specified by path ", function() {
    var response = chakram.get("http://localhost:3000/v1/questionnaires");
    expect(response).to.have.status(200);

    return chakram.wait();
    });
  });

});
