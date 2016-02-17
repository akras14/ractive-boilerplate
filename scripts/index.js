var Ractive = require('ractive');
var page = require('page');
var Home = require('./home.js');
var About = require('./about.js');

var ractive = new Ractive({
  el: '#container',
  template: require('../templates/main.html'),
  components: {
    Home: Home,
    About: About
  },
  data: {
    view: 'home'
  }
});

ractive.on('changeView', function ( event ) {
  var view = ractive.get('view');
  if(view === 'home'){
    ractive.set('view', 'not-home');
  } else {
    ractive.set('view', 'home');
  }
});
