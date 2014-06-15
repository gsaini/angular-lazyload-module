define([
    'angular',
    './app',
    './service'
], function(angular, app, service) {
    'use strict';

    app.controller('AppCtrl', ['$scope', 'AppService', '$log',
        function($scope, appService, $log) {
            $log.info(appService.getData());
        }
    ]);
});