describe('ExampleController', function() {
    var scope, controller, httpBackend, ngCart;

    // Initialization of the AngularJS application before each test case
    beforeEach(module('ExampleApp'));

    // Injection of dependencies, $http will be mocked with $httpBackend
    beforeEach(inject(function($rootScope, $controller, $httpBackend) {
        scope = $rootScope;
        controller = $controller;
        httpBackend = $httpBackend;
        //ngCart = null;
    }));

    it('should query the webservice', function() {

        // Which HTTP requests do we expect to occur, and how do we response?
        //httpBackend.expectGET('/example').respond('[{"name": "First User"}, {"name": "Second User"}]');

        // Starting the controller
        //controller('ExampleController', {'$scope': scope});

        // Respond to all HTTP requests
        //httpBackend.flush();

        // Triggering the AngularJS digest cycle in order to resolve all promises
        //scope.$apply();

        // We expect the controller to put the right value onto the scope
        //expect(scope.example).toEqual('First User');

    });

});