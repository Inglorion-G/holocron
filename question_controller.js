// =================
// Consumes SWAPI (https://swapi.co) to generate star wars trivia questions

var util  = require('./utility'),
    swapi = require('swapi-node');

function getStarWarsPerson(req, res, next) {
    var num = util.getRandomInt(1, 11);
    swapi.getPerson(num).then(function (result) {
        res.send(result);
        next();
    });
}

module.exports = {
    getStarWarsPerson: getStarWarsPerson
};