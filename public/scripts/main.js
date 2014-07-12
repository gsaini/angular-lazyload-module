require.config({
    shim: {
        angular: {
            exports: 'angular'
        },
        ocLazyLoad: ['angular'],
        bootstrap: ['angular'],
        'angular-ui-router': ['angular'],
        'angular-translate': ['angular']
    },
    paths: {
        angular: '../bower_components/angular/angular',
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
        'angular-translate': '../bower_components/angular-translate/angular-translate',
        ocLazyLoad: '../bower_components/ocLazyLoad/ocLazyLoad',
        bootstrap: '../bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
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
    deps: ['angular', 'app', './states', './controller'],
    callback: function(angular, app, routeManager, controller) {
        angular.bootstrap(document, ['app']);
    }
});