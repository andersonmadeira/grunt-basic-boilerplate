module.exports = function (grunt) {
    'use strict';

    /* Working directory that holds all assets */
    var work_dir = 'assets'

    // grunt configuration
    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            all: {
                options: {
                    mangle: false /*{ // name mangling doesnt work when you're using wordpress' localize_script
                        reserved: ['jQuery', 'Backbone'] // exceptions for name mangling
                    }*/
                },
                files: [{
                    expand: true,
                    src: [work_dir+'/**/*.js', '!'+work_dir+'/**/*.min.js'], // Source: all js files under assets except already minified files
                    dest: '.', // Save files on the same location of original files
                    cwd: '.', // Working dir is here where the Gruntfile is, so dst can match same dir of original files
                    rename: function (dst, src) {
                        return dst + '/' + src.replace('.js', '.min.js'); // minified file will be .min.js
                    }
                }]
            }
        },
        cssmin: {
            all: {
                files: [{
                    expand: true,
                    src: [work_dir+'/**/*.css', '!'+work_dir+'/**/*.min.css'],
                    cwd: '.',
                    dest: '.',
                    ext: '.min.css'
                }]
            }
        }
    };

    grunt.initConfig(gruntConfig);

    // carregando plugins
    grunt.loadNpmTasks('grunt-contrib-uglify'); // js min
    grunt.loadNpmTasks('grunt-contrib-cssmin'); // css min
    grunt.loadNpmTasks('grunt-newer'); // only new changes

    // tarefas
    grunt.registerTask('default', ['newer:uglify', 'newer:cssmin']);
};