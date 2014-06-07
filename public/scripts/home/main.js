define([
    'angular',
    './controller',
    './service'
], function(angular, controller, service) {
    'use strict';

    var homeModule = angular.module('home', [])
        .controller('HomeController', controller)
        .service('HomeService', service);

    return homeModule;
});