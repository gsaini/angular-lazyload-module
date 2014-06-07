define([
    'angular',
    'angular-ui-router',
    'ocLazyLoad',
    'controller',
    'service',
    'bootstrapService',
    'routeManager',
    'bootstrap'
], function(angular, uiRouter, ocLazyLoad, controller, service, bootstrapService, routeManager, bootstrap) {
    'use strict';

    var app = angular.module('appModule', [
        'ui.router',
        'oc.lazyLoad',
        'ui.bootstrap'
    ]);

    app.controller('ApplicationController', controller)
        .service('LoadService', service)
        .service('ModalService', bootstrapService.modalService)
        .config(routeManager);

    return app;
});