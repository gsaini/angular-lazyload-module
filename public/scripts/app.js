define([
    'angular',
    'angular-ui-router',
    'angular-translate',
    'angular-growl',
    'angular-animate',
    'ocLazyLoad',
    'ngActivityIndicator',
    'bootstrap',
    'common/main'
], function(angular, uiRoute, translate, animate, growl, ocLazyLoad, ngActivityIndicator, bootstrap) {
    'use strict';

    var app = angular.module('app', [
        'ui.router',
        'pascalprecht.translate',
        'oc.lazyLoad',
        'ui.bootstrap',
        'angular-growl',
        'ngAnimate',
        'ngActivityIndicator',
        'common'
    ]);

    app.config([
        '$translateProvider',
        '$activityIndicatorProvider',
        'growlProvider',
        function($translateProvider, $activityIndicatorProvider, growlProvider) {

            // growl messages..
            growlProvider.globalPosition('bottom-right');


            $activityIndicatorProvider.setActivityIndicatorStyle('CircledDark');

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