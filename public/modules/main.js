require.config({
    shim: {
        angular: {
            exports: "angular"
        },
        ocLazyLoad: ['angular'],
        bootstrap: ['angular'],
        angularRoute: ['angular']
    },
    paths: {
        angular: '../bower_components/angular/angular',
        angularRoute: '../bower_components/angular-route/angular-route',
        ocLazyLoad: '../bower_components/ocLazyLoad/ocLazyLoad',
        bootstrap: '../bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
        routeManager: 'route-manager',

        bootstrapService: 'common/services/bootstrap'
    },
    deps: ['angular', 'app'],
    callback: function(angular, app) {
        angular.bootstrap(document.getElementById('app'), ['appModule']);
    }
});