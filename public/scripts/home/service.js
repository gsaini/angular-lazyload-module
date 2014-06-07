define([
    'angular'
], function(angular) {
    'use strict';

    /**
     * [homeService description]
     * @type {Array}
     */
    var homeService = ['$http', '$q',
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
                return $http.get('data/home.json');
            };
        }
    ];

    return homeService;
});