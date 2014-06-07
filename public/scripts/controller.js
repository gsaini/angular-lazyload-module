define([
    'angular'
], function(angular) {
    'use strict';

    /**
     * [appController description]
     * @type {Array}
     */
    var appController = ['$scope', '$location',
        function($scope, $location) {
            $scope.options = {
                reload: true
            };
        }
    ];

    return appController;
});