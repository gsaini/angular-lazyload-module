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

            /**
             * [pageLoad description]
             * @return {[type]} [description]
             */
            self.pageLoad = function() {
                contactService.getContacts().success(function(response) {
                    $scope.contacts = response.data;
                });
            };

            self.pageLoad();
        }
    ];

    return contactController;
});