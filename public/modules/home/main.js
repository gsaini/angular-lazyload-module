define([
    'angular',
    './controller',
    './service'
], function(angular, controller, service) {
    'use strict';

    var homeModule = angular.module('home', [])
        .controller('HomeController', controller)
        .factory('HomeService', service);

    return homeModule;
});