define([
    'angular'
], function(angular) {
    'use strict';

    /**
     * [aboutService description]
     * @type {Array}
     */
    var aboutService = ['$http', '$q',
        function($http, $q) {
            var self = this;

            /**
             * [get description]
             * @return {[type]} [description]
             */
            self.get = function() {
                var deferred = $q.defer();
                self.getAwesomeThings().success(function(response) {
                    self.awesomeThings = response.data;
                    deferred.resolve();
                });
                return deferred.promise;
            };

            /**
             * [getAwesomeThings description]
             * @return {[type]} [description]
             */
            self.getAwesomeThings = function() {
                return $http.get('data/about.json');
            };
        }
    ];

    /**
     * [otherService description]
     * @type {Array}
     */
    var otherService = ['$http',
        function($http) {
            return {
                /**
                 * [getStatus description]
                 * @return {[type]} [description]
                 */
                getStatus: function() {
                    return 'active';
                }
            };
        }
    ];

    return {
        aboutService: aboutService,
        otherService: otherService
    };
});