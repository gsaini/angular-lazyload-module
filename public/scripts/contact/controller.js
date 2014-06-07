define(['angular'], function(angular) {
    'use strict';

    /**
     * [contactController description]
     * @param  {[type]} $scope [description]
     * @return {[type]}        [description]
     */
    var contactController = ['$scope', '$rootScope', 'ContactService',
        function($scope, $rootScope, contactService) {
            var self = this;

            $rootScope.pageTitle = 'contact';
            $scope.data = contactService;
        }
    ];

    return contactController;
});