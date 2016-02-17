var Ractive = require('ractive');

module.exports = exports = Ractive.extend({
  isolated: false,
  template: require('../templates/home.html'),
  data: {
    name: 'World'
  }
});



