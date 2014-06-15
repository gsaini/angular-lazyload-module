define([
    'angular',
    'angular-ui-router',
    'ocLazyLoad',
    'bootstrap'
], function(angular, uiRoute, ocLazyLoad, bootstrap) {
    'use strict';

    return angular.module('appModule', [
        'ui.router',
        'oc.lazyLoad',
        'ui.bootstrap'
    ]);
});