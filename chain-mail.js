var _ = require("lodash");

var chained = function(words) {
  return _.chain(words)
    .map(function(word){
      return word + 'chained';
    })
    .map(function(word) {
      return word.toUpperCase();
    })
    .sort()
  };


module.exports = chained;
