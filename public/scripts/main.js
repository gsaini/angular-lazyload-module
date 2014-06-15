require.config({
    shim: {
        angular: {
            exports: 'angular'
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
        services: 'common/services',
        directives: 'common/directives'
    },
    packages: ['services', 'directives'],
    modules: [{
        name: 'common/main',
        include: ['services', 'directives'],
        exclude: ['angular']
    }, {
        name: 'home/main',
        exclude: ['angular', 'services', 'directives']
    }, {
        name: 'about/main',
        exclude: ['angular', 'services', 'directives']
    }, {
        name: 'contact/main',
        exclude: ['angular', 'services', 'directives']
    }, {
        name: 'main'
    }],
    deps: ['angular', 'app', 'routeManager', './controller'],
    callback: function(angular, app, routeManager, controller) {
        angular.bootstrap(document, ['appModule']);
    }
});