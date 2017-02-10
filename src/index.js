require('./components').init()

$(document).ready(function() {
  var blockchain = require('./blockchain');
  blockchain.render(6);
})
