define([
    'angular'
], function(angular) {
    'use strict';

    /**
     * [config description]
     * @type {Array}
     */
    var config = ['$routeProvider', '$ocLazyLoadProvider',
        function($routeProvider, $ocLazyLoadProvider) {

            $ocLazyLoadProvider.config({
                asyncLoader: require
            });

            /**
             * [load description]
             * @param  {[type]} moduleName [description]
             * @param  {[type]} ModuleUrl  [description]
             * @return {[type]}            [description]
             */
            var loadModule = function(moduleName, ModuleUrl) {
                return ['LoadService', function(loadService) {
                    return loadService.load(moduleName, ModuleUrl);
                }];
            };

            $routeProvider
                .when('/home', {
                    templateUrl: 'modules/home/home.html',
                    controller: 'HomeController',
                    resolve: {
                        load: loadModule('home', 'home/main')
                    }
                })
                .when('/about', {
                    templateUrl: 'modules/about/about.html',
                    controller: 'AboutController',
                    resolve: {
                        load: loadModule('about', 'about/main')
                    }
                })
                .when('/contact', {
                    templateUrl: 'modules/contact/contact.html',
                    controller: 'ContactController',
                    resolve: {
                        load: loadModule('contact', 'contact/main')
                    }
                })
                .otherwise({
                    redirectTo: '/home'
                });
        }
    ];

    return config;
});