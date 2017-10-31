export default ($urlRouterProvider, $locationProvider, $stateProvider) => {

  $urlRouterProvider.otherwise('/');

  $locationProvider.hashPrefix('!');

  [
    {
      // url: '',
      name: 'app',
      abstract: true,
      template: '<namespace></namespace>',
    },

    {
      url: '/',
      name: 'app.home',
      template: '<namespace.namespace></namespace.namespace>',
    },

    {
      url: '/users',
      name: 'app.users',
      template: '<namespace.users></namespace.users>',
    },

    {
      url: '/categories',
      name: 'app.categories',
      template: '<namespace.categories></namespace.categories>',
    },

    {
      url: '/lifecycle',
      name: 'app.lifecycle',
      template: '<namespace.lifecycle></namespace.lifecycle>',
    }

  ].forEach($stateProvider.state);
}
