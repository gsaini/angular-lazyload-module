define([
    'angular',
    'angular-mocks',
    'controller'
], function(angular) {
    'use strict';

    describe('just checking', function() {
        //Mocks
        var _httpBackend, _AppService,
            //Controller
            _ctrl,

            //Scope
            _ctrlScope;

        beforeEach(module('appModule'));

        // Angular strips the underscores when injecting
        beforeEach(function() {
            // INJECT Dependencies
            // $rootScope - injected to create a new $scope instance.
            // $controller - injected to create an instance of our controller.
            // ProfileService - injected to create an instance of ProfileService 
            // $httpBackend - injected to create an instance of httpBackend 
            // FetchPaths - injected to create an instance of FetchPaths 
            // $q - injected so we can create promises for our mocks.
            // _$timeout_ - injected to we can flush unresolved promises.

            inject(function($rootScope, $httpBackend, $controller, AppService, $q, $timeout) {

                // create a scope object for us to use.
                _ctrlScope = $rootScope.$new();

                //Assigning $httpBackend mocked service to httpBackend object
                _httpBackend = $httpBackend;

                _AppService = AppService;

                // now run that scope through the controller function,
                // injecting any services or other injectables we need.
                // **NOTE**: this is the only time the controller function will be run, so anything that occurs inside of that
                // will already be done before the first spec.
                _ctrl = $controller("AppCtrl", {
                    "$scope": _ctrlScope,
                    "AppService": _AppService
                });
            });

        }); //end beforeEach

        /*TEST BLOCK: To Check , is controller working properly*/
        it('should have an AppCtrl controller to be defined', function() {
            expect(_ctrl).toBeDefined();
        });

        /*TEST BLOCK: To Check is AppService is working*/
        it('Should have injected AppService service.', function() {
            expect(_AppService).toBeDefined();
            spyOn(_AppService, 'getData').andCallThrough();
        });
    });

});