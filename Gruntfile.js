module.exports = function (grunt) {

    // Variable
    var ROOT_PATH = '.';

    require('time-grunt')(grunt);

    // Grunt Config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: [
                            'dist'
                        ]
                    }
                ]
            }
        },
        copy: {
            main: {
                files: [
                    // {expand: true, cwd: 'demo', src: ['script.js'], dest: 'dist'} // partials html file
                    // {expand: true, cwd: 'app', src: ['*.*'], dest: 'dist/'}
                ]
            }
        },
        concat: {
            basic_and_extras: {
                files: {
                    'dist/angular-validation.js': ['src/module.js', 'src/provider.js', 'src/directive.js']
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/angular-validation.min.js': ['dist/angular-validation.js']
                }
            }
        },
        connect: {
            server: {
                options: {
                    protocol: 'http',
                    hostname: '*',
                    port: 8080,
                    base: ROOT_PATH
                }
            }
        },
        watch: {
            files: ['src/*.js'],
            tasks: ['build'],
            options: {
                spawn: false,
                interrupt: true
            }
        },
        karma: {
            unit: {
                configFile: 'config/karma.conf.js'
            }
        }
    });

    require( "load-grunt-tasks" )( grunt );

    // Register Task
    grunt.registerTask('dev', ['connect', 'watch']);
    grunt.registerTask('build', ['clean', 'concat', 'uglify'])

};