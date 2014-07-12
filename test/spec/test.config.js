var tests = Object.keys(window.__karma__.files).filter(function(file) {
    return (/\-spec\.js$/).test(file);
});

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base/public/scripts/',

    shim: {
        angular: {
            exports: 'angular'
        },
        ocLazyLoad: ['angular'],
        bootstrap: ['angular'],
        'angular-ui-router': ['angular'],
        'angular-translate': ['angular'],
        'angular-mocks': ['angular']
    },

    paths: {
        angular: '../bower_components/angular/angular',
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
        'angular-translate': '../bower_components/angular-translate/angular-translate',
        'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
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


    // dynamically load all test files
    deps: tests,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});