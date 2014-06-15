define([
    'angular',
    '../module',
    './service'
], function(angular, lazyModule, service) {
    'use strict';

    lazyModule.controller('HeaderCtrl', ['$scope', '$location', '$log',
        function($scope, $location, $log) {
            $log.info('HeaderCtrl');
        }
    ]);
});