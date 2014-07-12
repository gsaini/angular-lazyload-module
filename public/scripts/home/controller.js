define([
    'angular',
    './module',
    './service',
    'services/bootstrap'
], function(angular, lazyModule, service, bootstrapService) {
    'use strict';

    lazyModule.controller('HomeCtrl', ['$scope', '$rootScope', 'HomeService', 'ModalService',
        function($scope, $rootScope, homeService, modalService) {

            $rootScope.pageTitle = 'home';
            $scope.home = homeService;

            /**
             * [modal description]
             * @return {[type]} [description]
             */
            $scope.modal = function() {
                modalService.showStatusModal('Bootstrap', '$modal is a service to quickly create AngularJS-powered modal windows. Creating custom modals is straightforward: create a partial view, its controller and reference them when using the service.');
            };
        }
    ]);
});