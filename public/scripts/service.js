define([
    'angular',
    './app'
], function(angular, app) {
    'use strict';

    app.service('AppService', ['$http',
        function($http) {
            return {
                getData: function() {
                    return 'Service data';
                }
            };
        }
    ]);
});