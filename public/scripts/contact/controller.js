define([
    'angular',
    './module',
    './service',
    'services/bootstrap'
], function(angular, lazyModule, service, bootstrapService) {
    'use strict';

    lazyModule.controller('ContactCtrl', ['$scope', '$rootScope', 'ContactService', 'ModalService', 'growl', '$timeout',
        function($scope, $rootScope, contactService, modalService, growl, $timeout) {
            var self = this;

            $rootScope.pageTitle = 'contact';
            $scope.data = contactService;

            /**
             * [addSpecialWarnMessage description]
             */
            $scope.addSpecialWarnMessage = function() {
                growl.warning("This adds a warn message");
                growl.info("This adds a info message");
                growl.success("This adds a success message");
                growl.error("This adds a error message");
            };

            $timeout($scope.addSpecialWarnMessage, 2000);
        }
    ]);
});