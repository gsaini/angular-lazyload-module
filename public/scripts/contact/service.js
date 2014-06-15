define([
    'angular',
    './module'
], function(angular, lazyModule) {
    'use strict';

    lazyModule.service('ContactService', ['$http', '$q',
        function($http, $q) {
            var self = this;

            /**
             * [get description]
             * @return {[type]} [description]
             */
            self.get = function() {
                var deferred = $q.defer();
                self.getContacts().success(function(response) {
                    self.contacts = response.data;
                    deferred.resolve();
                });
                return deferred.promise;
            };

            /**
             * [getContacts description]
             * @return {[type]} [description]
             */
            self.getContacts = function() {
                return $http.get('data/contacts.json');
            };

        }
    ]);
});