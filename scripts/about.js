var Ractive = require('ractive');

module.exports = exports = Ractive.extend({
  isolated: false,
  template: require('../templates/about.html'),
  data: {
    name: 'World'
  }
});
