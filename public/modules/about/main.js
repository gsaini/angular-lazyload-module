define([
    'angular',
    './controller',
    './service'
], function(angular, controller, service) {
    'use strict';

    var aboutModule = angular.module('about', [])
        .controller('AboutController', controller)
        .service('AboutService', service.aboutService)
        .service('OtherService', service.otherService);

    return aboutModule;
});