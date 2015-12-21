Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/about');

Router.route('/features');

Router.configure({
  layoutTemplate: 'main'
});
