var restify  = require('restify');

var server = module.exports.server = restify.createServer({
    name: 'Holocron'
});

var router = require('./router');

server.listen(8080, function () {
    console.log("%s listening at %s", server.name, server.url);
});