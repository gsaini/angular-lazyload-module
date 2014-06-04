define([
    'angular',
    'angularRoute',
    'ocLazyLoad',
    'controller',
    'service',
    'bootstrapService',
    'routeManager',
    'bootstrap'
], function(angular, angularRoute, ocLazyLoad, controller, service, bootstrapService, routeManager, bootstrap) {
    'use strict';

    var app = angular.module('appModule', [
        'ngRoute',
        'oc.lazyLoad',
        'ui.bootstrap'
    ]);

    app.controller('ApplicationController', controller);
    app.service('LoadService', service);
    app.service('ModalService', bootstrapService.modalService);
    app.config(routeManager);

    return app;
});