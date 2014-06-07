define([
    'angular'
], function(angular) {
    'use strict';

    /**
     * [config description]
     * @type {Array}
     */
    var config = ['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',
        function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

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

            $stateProvider
                .state('app', {
                    url: '/app',
                    abstract: true,
                    views: {
                        header: {
                            templateUrl: 'scripts/common/partials/header.html'
                        },
                        '': {
                            template: '<div ui-view ng-cloak></div>'
                        }
                    },
                    resolve: {
                        reload: function() {
                            console.info('reload');
                            return true;
                        }
                    }
                })
                .state('app.home', {
                    url: '',
                    templateUrl: 'scripts/home/home.html',
                    controller: 'HomeController',
                    resolve: {
                        deps: loadModule('home', 'home/main'),
                        awesomeThings: ['deps', 'HomeService',
                            function(deps, homeService) {
                                return homeService.get();
                            }
                        ]
                    }
                })
                .state('app.about', {
                    url: '/about',
                    templateUrl: 'scripts/about/about.html',
                    controller: 'AboutController',
                    resolve: {
                        deps: loadModule('about', 'about/main'),
                        awesomeThings: ['deps', 'AboutService',
                            function(deps, aboutService) {
                                return aboutService.get();
                            }
                        ]
                    }
                })
                .state('app.contact', {
                    url: '/contact',
                    templateUrl: 'scripts/contact/contact.html',
                    controller: 'ContactController',
                    resolve: {
                        deps: loadModule('contact', 'contact/main'),
                        contacts: ['deps', 'ContactService',
                            function(deps, contactService) {
                                return contactService.get();
                            }
                        ]
                    }
                });

            $urlRouterProvider.otherwise('/app');
            $urlRouterProvider.when('/app', '/app/home');
        }
    ];

    return config;
});