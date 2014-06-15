define([
    'angular'
], function(angular) {
    'use strict';

    var commonModule = angular.module('common', []);
    commonModule.config([
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',
        function($controllerProvider, $compileProvider, $filterProvider, $provide) {
            commonModule.lazy = {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };
        }
    ]);
    return commonModule;
});