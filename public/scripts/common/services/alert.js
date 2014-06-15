define([
    'angular',
    '../module'
], function(angular, lazyModule) {
    'use strict';

    lazyModule.lazy.service('AlertService', function() {
        return {
            showAlert: function(msg) {
                alert(msg);
            }
        };
    });
});