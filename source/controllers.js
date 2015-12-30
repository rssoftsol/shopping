/**
 * This is an example controller.
 * It triggers the UserdataService and puts the returned value on the scope
 *
 * @see services
 */

var controllers = angular.module('ExampleApp.controllers', ['ngCart']);

controllers.controller('ExampleController', ['$scope', '$http','ngCart',
  function ($scope, $http, ngCart) {
    ngCart.setTaxRate(7.5);
    ngCart.setShipping(2.99);
  }]);

controllers.controller('ExampleDetailController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);