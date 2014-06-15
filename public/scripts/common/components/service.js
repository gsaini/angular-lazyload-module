define([
    'angular',
    '../module'
], function(angular, lazyModule) {
    'use strict';

    lazyModule.service('HeaderService', ['$http',
        function($http) {
            console.info('HeaderService');
        }
    ]);
});