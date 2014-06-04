define([
    'angular'
], function(angular) {
    'use strict';

    /**
     * [homeService description]
     * @type {Array}
     */
    var homeService = ['$http',
        function($http) {
            return {
                /**
                 * [getData description]
                 * @return {[type]} [description]
                 */
                getData: function() {
                    return $http.get('data/home.json');
                }
            };
        }
    ];

    return homeService;
});