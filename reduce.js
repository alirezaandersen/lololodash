
var _ = require("lodash");

var reducing = function(collection) {
  var answer = []

  var grouped = _.groupBy(collection, 'article');

  _.forEach(grouped, function (all, name) {
    var total = _.reduce(all, function (sum, order) {
      return sum + order.quantity;
    }, 0);

    answer.push({ article: parseInt(name), total_orders: total });
  });

  return _.sortBy(answer, 'total_orders').reverse();
  };


module.exports = reducing;
