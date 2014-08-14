define([
    'angular',
    './module'
], function(angular, lazyModule) {
    'use strict';

    lazyModule.constant('AboutConstants', {
    	tabs:{
    		1:'home',
    		2:'about',
    		3:'contact'
    	},
    	messages:{
    		alertMsg: 'Oh snap! Change a few other things up and try submitting again.'
    	}
    });
});