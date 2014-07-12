var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
    return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
    }
});

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base',

    paths: {
        angular: 'public/bower_components/angular/angular',
        'angular-ui-router': 'public/bower_components/angular-ui-router/release/angular-ui-router',
        ocLazyLoad: 'public/bower_components/ocLazyLoad/ocLazyLoad',
        bootstrap: 'public/bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
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
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});