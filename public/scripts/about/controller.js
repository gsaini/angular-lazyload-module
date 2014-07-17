define([
    'angular',
    './module',
    './service',
    'directives/directive'
], function(angular, lazyModule, service, testDirective) {
    'use strict';

    lazyModule.controller('AboutCtrl', ["$scope", '$rootScope', 'AboutService', 'OtherService',
        function($scope, $rootScope, aboutService, otherService) {
            var self = this;

            $rootScope.pageTitle = 'about';
            $rootScope.isReload = true;
            $scope.about = aboutService;
            $scope.status = otherService.getStatus();

            $scope.alerts = [{
                type: 'danger',
                msg: 'Oh snap! Change a few things up and try submitting again.'
            }];

            /**
             * [addAlert description]
             */
            $scope.addAlert = function() {
                $scope.alerts.push({
                    msg: "Another alert!"
                });
            };

            /**
             * [closeAlert description]
             * @param  {[type]} index [description]
             * @return {[type]}       [description]
             */
            $scope.closeAlert = function(index) {
                $scope.alerts.splice(index, 1);
            };
        }
    ]);
});