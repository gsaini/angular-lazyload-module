define([
    'angular',
    '../module'
], function(angular, lazyModule) {
    'use strict';

    lazyModule.lazy.directive('testDirective', ['$window',
        function($window) {
            return {
                restrict: 'A',
                link: function($scope, $element, $attr) {
                    if ($scope) {
                        $element.bind('keypress', function(event) {
                            event = (event) ? event : window.event;
                            var charCode = (event.which) ? event.which : event.keyCode;
                            if (charCode > 31 && charCode != 46 && (charCode < 48 || charCode > 57)) {
                                return false;
                            }
                            return true;
                        });
                    }
                }
            };
        }
    ]);
});