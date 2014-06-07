define([
    'angular'
], function(angular) {
    'use strict';

    /**
     * [homeController description]
     * @param  {[type]} $scope      [description]
     * @param  {[type]} homeService [description]
     * @return {[type]}             [description]
     */
    var homeController = ['$scope', '$modal', '$rootScope', 'HomeService', 'ModalService',
        function($scope, $modal, $rootScope, homeService, modalService) {

            $rootScope.pageTitle = 'home';
            $scope.home = homeService;

            /**
             * [modal description]
             * @return {[type]} [description]
             */
            $scope.modal = function() {
                modalService.showStatusModal('Bootstrap', '$modal is a service to quickly create AngularJS-powered modal windows. Creating custom modals is straightforward: create a partial view, its controller and reference them when using the service.');
            };
        }
    ];

    return homeController;
});