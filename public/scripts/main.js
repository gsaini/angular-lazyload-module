require.config({
    shim: {
        angular: {
            exports: "angular"
        },
        ocLazyLoad: ['angular'],
        bootstrap: ['angular'],
        'angular-ui-router': ['angular']
    },
    paths: {
        angular: '../bower_components/angular/angular',
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
        ocLazyLoad: '../bower_components/ocLazyLoad/ocLazyLoad',
        bootstrap: '../bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
        routeManager: 'route-manager',

        bootstrapService: 'common/services/bootstrap'
    },
    modules: [{
        name: "home/main",
        exclude: ['angular']
    }, {
        name: "about/main",
        exclude: ["angular"]
    }, {
        name: "contact/main",
        exclude: ["angular"]
    }, {
        name: 'main'
    }],
    deps: ['angular', 'app'],
    callback: function(angular, app) {
        angular.bootstrap(document.getElementsByTagName('body'), ['appModule']);
    }
});