var Ractive = require('ractive');

var helloWorld = new Ractive({
  el: '#container',
  template: '#template',
  data: {
    name: 'World'
  }
});
