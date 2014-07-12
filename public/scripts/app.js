define([
    'angular',
    'angular-ui-router',
    'angular-translate',
    'ocLazyLoad',
    'bootstrap'
], function(angular, uiRoute, ocLazyLoad, bootstrap) {
    'use strict';

    var app = angular.module('appModule', [
        'ui.router',
        'pascalprecht.translate',
        'oc.lazyLoad',
        'ui.bootstrap'
    ]);

    app.config([
        '$translateProvider',
        function($translateProvider) {
            $translateProvider.translations('en', {
                HEADLINE: 'Hello !'
            }).translations('hi', {
                HEADLINE: 'नमस्कार!'
            });
            $translateProvider.preferredLanguage('hi');
        }
    ]);

    return app;
});