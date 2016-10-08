export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController as vm'

    })
    .state('about', {
      url: '/about?:tab',
      templateUrl: 'app/about/about.html',
      controller: 'AboutController as vm'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'app/contact/contact.html',
      controller: 'ContactController as vm'
    })
    .state('people', {
      url: '/people',
      templateUrl: 'app/people/people.html',
      controller: 'PeopleController as vm'
    })
    .state('checkbox', {
      url: '/checkbox',
      templateUrl: 'app/checkbox/checkbox.html',
      controller: 'CheckboxController as vm'
    });

  $urlRouterProvider.otherwise('/');
}