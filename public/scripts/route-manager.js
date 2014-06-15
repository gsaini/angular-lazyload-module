define([
    'angular',
    './app'
], function(angular, app) {
    'use strict';

    app.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',
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
            var loadModule = function(moduleName, moduleUrl) {
                return ['$ocLazyLoad',
                    function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: moduleName,
                            files: [moduleUrl]
                        });
                    }
                ];
            };

            $stateProvider
                .state('app', {
                    url: '/app',
                    abstract: true,
                    views: {
                        header: {
                            templateUrl: 'scripts/common/components/header.html',
                            controller: 'AppCtrl'
                        },
                        '': {
                            template: '<ui-view/>'
                        }
                    },
                    resolve: {
                        commonModule: loadModule('common', 'common/main')
                    }
                })
                .state('app.home', {
                    url: '',
                    templateUrl: 'scripts/home/home.html',
                    controller: 'HomeCtrl',
                    resolve: {
                        homeModule: loadModule('home', 'home/main'),
                        awesomeThings: ['homeModule', 'HomeService',
                            function(deps, homeService) {
                                return homeService.get();
                            }
                        ],
                        reload: function() {
                            console.info('reload');
                            return true;
                        }
                    }
                })
                .state('app.about', {
                    url: '/about',
                    templateUrl: 'scripts/about/about.html',
                    controller: 'AboutCtrl',
                    resolve: {
                        aboutModule: loadModule('about', 'about/main'),
                        awesomeThings: ['aboutModule', 'AboutService',
                            function(aboutModule, aboutService) {
                                return aboutService.get();
                            }
                        ]
                    }
                })
                .state('app.contact', {
                    url: '/contact',
                    templateUrl: 'scripts/contact/contact.html',
                    controller: 'ContactCtrl',
                    resolve: {
                        contactModule: loadModule('contact', 'contact/main'),
                        contacts: ['contactModule', 'ContactService',
                            function(contactModule, contactService) {
                                return contactService.get();
                            }
                        ]
                    }
                });
            $urlRouterProvider.otherwise('/app');
        }
    ]);

});