module.exports = function (grunt) {
    'use strict';

    /* The assets folder must be on the same level as the Gruntfile.js*/

    // configuração do projeto
    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            min: {
                options: {
                    mangle: {
                        reserved: ['jQuery', 'Backbone'] // jQuery and Backbone names should not change (name mangling), adjust this array to fit your needs
                    }
                },
                files: [{
                    expand: true,
                    src: ['assets/**/*.js', '!assets/**/*.min.js'], // Source: all js files under assets except already minified files
                    dest: '.', // Save files on the same location of original files
                    cwd: '.', // Working dir is here where the Gruntfile is, so dst can match same dir of original files
                    rename: function (dst, src) {
                        return dst + '/' + src.replace('.js', '.min.js'); // minified file will be .min.js
                    }
                }]
            }
        },
        cssmin: {
            min: {
                files: [{
                    expand: true,
                    src: ['assets/**/*.css', '!assets/**/*.min.css'],
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
    grunt.loadNpmTasks('grunt-newer');

    // tarefas
    grunt.registerTask('default', ['newer:uglify', 'newer:cssmin']);
};