define([
    'angular',
    'angular-ui-router',
    'angular-translate',
    'ocLazyLoad',
    'bootstrap',
    'common/main'
], function(angular, uiRoute, ocLazyLoad, bootstrap) {
    'use strict';

    var app = angular.module('app', [
        'ui.router',
        'pascalprecht.translate',
        'oc.lazyLoad',
        'ui.bootstrap',
        'common'
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