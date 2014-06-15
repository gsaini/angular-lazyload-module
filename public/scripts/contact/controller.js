define([
    'angular',
    './module',
    './service',
    'common/services/bootstrap'
], function(angular, lazyModule, service, bootstrapService) {
    'use strict';

    lazyModule.controller('ContactCtrl', ['$scope', '$rootScope', 'ContactService', 'ModalService',
        function($scope, $rootScope, contactService, modalService) {
            var self = this;

            $rootScope.pageTitle = 'contact';
            $scope.data = contactService;
        }
    ]);
});