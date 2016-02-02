// =================
// Consumes SWAPI (https://swapi.co)
var swapi   = require('swapi-node'),
    baseUrl = 'http://swapi.co/api/';

function getPerson(req, res, next) {
    var id = req.params.id;
    swapi.getPerson(id).then(function (result) {
        res.send(result);
        next();
    });
}

function getPeople(req, res, next) {
    swapi.get(baseUrl + 'people').then(function (result) {
        res.send(result);
        next();
    });
}

module.exports = {
    getPerson: getPerson,
    getPeople: getPeople
};