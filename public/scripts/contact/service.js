define([
    'angular'
], function(angular) {

    'use strict';

    /**
     * [contactService description]
     * @type {Array}
     */
    var contactService = ['$http',
        function($http) {
            return {
                /**
                 * [getContacts description]
                 * @return {[type]} [description]
                 */
                getContacts: function() {
                    return $http.get('data/contacts.json');
                }
            };
        }
    ];

    return contactService;
});