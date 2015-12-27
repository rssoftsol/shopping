/**
 * This is an example controller.
 * It triggers the UserdataService and puts the returned value on the scope
 *
 * @see services
 */

var controllers = angular.module('ExampleApp.controllers', []);

controllers.controller('ExampleController', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('/example').success(function(data) {
      $scope.example = data[0].name;
    });

    $scope.orderProp = 'age';
  }]);

controllers.controller('ExampleDetailController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);