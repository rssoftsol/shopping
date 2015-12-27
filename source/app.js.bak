/**
 * Setup of main AngularJS application, with Restangular being defined as a dependency.
 *
 * @see controllers
 * @see services
 */
var app = angular.module('ExampleApp',
    [   
        'ngRoute',
        'ExampleApp.controllers'
    ]   
);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/example', {
        templateUrl: 'source/cart.html',
        controller: 'ExampleController'
      }).
      when('/example/:phoneId', {
        templateUrl: 'source/cart.html',
        controller: 'ExampleController'
      }).
      otherwise({
        redirectTo: '/example'
      });
  }]);