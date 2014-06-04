define([
    'angular'
], function(angular) {
    'use strict';

    /**
     * [lazyLoadService description]
     * @param  {[type]} $ocLazyLoadProvider [description]
     * @return {[type]}                     [description]
     */
    var lazyLoadService = function($ocLazyLoad) {
        var self = this;
        self.load = function(moduleName, moduleUrl) {
            return $ocLazyLoad.load({
                name: moduleName,
                files: [moduleUrl]
            });
        };
    };

    return ['$ocLazyLoad', lazyLoadService];
});