var server = module.parent.exports.server;

var swapiController = require('./controllers/swapi');

// person routes
server.get('/person/:id', swapiController.getPerson);
server.get('/people', swapiController.getPeople);