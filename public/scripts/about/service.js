define([
    'angular'
], function(angular) {
    'use strict';

    /**
     * [aboutService description]
     * @type {Array}
     */
    var aboutService = ['$http',
        function($http) {
            return {
                /**
                 * [getAwesomeThings description]
                 * @return {[type]} [description]
                 */
                getAwesomeThings: function() {
                    return $http.get('data/about.json');
                }
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