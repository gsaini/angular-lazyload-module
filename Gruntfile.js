module.exports = function(grunt) {
    'use strict';

    // Displays the execution time of [grunt](http://gruntjs.com) tasks
    require('time-grunt')(grunt);

    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            compile: {
                options: {
                    dir: "build",
                    removeCombined: true,
                    mainConfigFile: 'public/scripts/main.js'
                }
            }
        },
        bower: {
            target: {
                rjsConfig: 'public/scripts/main.js',
                options: {
                    baseUrl: 'public/'
                }
            }
        }
    });
    grunt.registerTask('build', ['requirejs']);
};