define([
    'angular',
    './module',
    './service',
    'directives/directive',
    './constants'
], function(angular, lazyModule, service, testDirective) {
    'use strict';

    lazyModule.controller('AboutCtrl', [
        "$scope", 
        '$rootScope', 
        'AboutService', 
        'OtherService',
        'AboutConstants',
        function($scope, $rootScope, aboutService, otherService, aboutConstants) {

            $scope.messages = [];
            $scope.alerts = [];

            $rootScope.pageTitle = 'about';
            $rootScope.isReload = true;
            $scope.about = aboutService;
            $scope.status = otherService.getStatus();            

            /**
             * [addAlert description]
             */
            $scope.addAlert = function() {
                $scope.alerts.push({
                    msg: aboutConstants.messages.alertMsg
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