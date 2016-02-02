// ================
// Useful Functions

module.exports = {
    // get a random integer, including min and excluding max
    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
};