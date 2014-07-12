define([
    'angular',
    'angular-mocks',
    'home/controller'
], function(angular) {
    'use strict';

    describe('just checking', function() {
        var _httpBackend, _HomeService,
            _ModalService,
            //Controller
            _ctrl,

            //Scope
            _ctrlScope;

        beforeEach(module('home'));

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

            inject(function($rootScope, $httpBackend, $controller, HomeService, ModalService, $q, $timeout) {

                // create a scope object for us to use.
                _ctrlScope = $rootScope.$new();

                //Assigning $httpBackend mocked service to httpBackend object
                _httpBackend = $httpBackend;

                _HomeService = HomeService;
                _ModalService = ModalService;

                // now run that scope through the controller function,
                // injecting any services or other injectables we need.
                // **NOTE**: this is the only time the controller function will be run, so anything that occurs inside of that
                // will already be done before the first spec.
                _ctrl = $controller("HomeCtrl", {
                    "$scope": _ctrlScope,
                    "HomeService": _HomeService,
                    'ModalService': _ModalService
                });
            });

        }); //end beforeEach

        /*TEST BLOCK: To Check , is controller working properly*/
        it('should have an HomeCtrl controller to be defined', function() {
            expect(_ctrl).toBeDefined();
        });

        /*TEST BLOCK: To Check is HomeService is working*/
        it('Should have injected HomeService service.', function() {
            expect(_HomeService).toBeDefined();
            spyOn(_HomeService, 'getAwesomeThings').andCallThrough();
        });

    });
});