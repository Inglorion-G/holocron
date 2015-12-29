// ================
// Useful Functions

// ==
// get a random integer, including min and excluding max

module.exports = {
    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
};