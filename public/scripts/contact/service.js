define([
    'angular'
], function(angular) {

    'use strict';

    /**
     * [contactService description]
     * @type {Array}
     */
    var contactService = ['$http', '$q',
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
    ];

    return contactService;
});