define([
    'angular',
    'contact/controller',
    'contact/service'
], function(angular, controller, service) {

    'use strict';

    var contactModule = angular.module('contact', [])
        .controller('ContactController', controller)
        .service('ContactService', service);

    return contactModule;
});