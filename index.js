var restify  = require('restify'),
    question = require('./question_controller');

var server = restify.createServer();
server.get('/starwars', question.getStarWarsPerson);
server.listen(8080);