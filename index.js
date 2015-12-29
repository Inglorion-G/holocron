var restify = require('restify'),
    swapi   = require('swapi-node');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getStarWarsPerson(req, res, next) {
    var num = getRandomInt(0, 11);
    swapi.getPerson(num).then(function (result) {
        res.send(result);
        next();
    });
}

var server = restify.createServer();
server.get('/starwars', getStarWarsPerson);
server.listen(8080);