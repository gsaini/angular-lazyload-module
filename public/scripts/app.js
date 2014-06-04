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

    app.controller('ApplicationController', controller)
        .service('LoadService', service)
        .service('ModalService', bootstrapService.modalService)
        .config(routeManager);

    return app;
});