define([
    'angular'
], function(angular) {
    'use strict';

    /**
     * [modalService description]
     * @type {Array}
     */
    var modalService = ['$modal',
        function($modal) {
            return {
                /**
                 * [showStatusModal description]
                 * @param  {[type]} header  [description]
                 * @param  {[type]} message [description]
                 * @return {[type]}         [description]
                 */
                showStatusModal: function(header, message) {
                    return $modal.open({
                        template: '<div><div class="modal-header"><h3>' + header + '</h3></div><div class="modal-body">' + message + '</div><div class="modal-footer cta-container"><button class="btn btn-primary" ng-click="$close({ok:true})">OK</button></div></div>'
                    });
                }
            };
        }
    ];

    return {
        modalService: modalService
    };
});