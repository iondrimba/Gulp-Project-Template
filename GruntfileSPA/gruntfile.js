/// <vs BeforeBuild='cssmin, default' SolutionOpened='concat, cssmin, imagemin, sass, requirejs' />
module.exports = function (grunt) {

    grunt.initConfig({
        paths: {
            jquery: 'node_modules/jquery/dist/jquery',
            backbone: 'node_modules/backbone/backbone',
            underscore: 'node_modules/underscore/underscore',
            views: 'scripts/app/views',
            vendors: 'scripts/vendors',
            routers: 'scripts/app/routers/router'
        },
        imagemin: {
            png: {
                options: {
                    optimizationLevel: 1
                },
                files: [
                  {
                      expand: true,
                      cwd: 'images/',
                      src: ['**/*.png'],
                      dest: 'images/',
                      ext: '.png'
                  }
                ]
            },
            jpg: {
                options: {
                    progressive: true
                },
                files: [
                  {
                      expand: true,
                      cwd: 'images/',
                      src: ['**/*.jpg'],
                      dest: 'images/',
                      ext: '.jpg'
                  }
                ]
            }
        },
        sass: {
            dist: {
                options: {
                    sourcemap: 'none',
                    style:'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'css/views',
                    src: ['*.scss'],                    
                    dest: 'css/views',
                    ext: '.css'
                }]
            }
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: [],
                dest: 'Scripts/build/vendors.js',
            }
        },
        concat_css: {
            options: {
                // Task-specific options go here. 
            },
            all: {
                src: ["css/views/*.css"],
                dest: "css/app.css"
            },
        },
        watch: {
            css: {
                files: 'css/views/*.css',
                tasks: ['concat_css']
            },
            scss: {
                files: 'css/views/*.scss',
                tasks: ['sass']
            },
            scripts: {
                files: ['Scripts/*.js', 'Scripts/**/*.js'],
                tasks: ['requirejs'],
                options: {
                    livereload: false
                }
            },
            options: {
                livereload: false,
                reload: false,
                nospawn: true
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'css/app.css': ['css/*.css']
                }
            }
        },
        requirejs: {
            dev: {
                options: {
                    name: 'Scripts/app/main',
                    out: 'Scripts/build/main.js',
                    baseUrl: '',
                    optimizeAllPluginResources: true,
                    noGlobal: true,
                    optimize: 'none',
                    mainConfigFile: 'Scripts/app/main.js',
                    allowSourceOverwrites: false,
                    paths: '<%= paths %>'
                }
            },
            prod: {
                options: {
                    name: 'Scripts/app/main',
                    out: 'Scripts/build/main.js',
                    baseUrl: '',
                    optimizeAllPluginResources: true,
                    noGlobal: true,
                    optimize: 'uglify',
                    mainConfigFile: 'Scripts/app/main.js',
                    allowSourceOverwrites: false,
                    paths: '<%= paths %>'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.loadNpmTasks('grunt-concat-css');

    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['dev']);

    grunt.registerTask('prod', function () {        
        grunt.task.run(['sass', 'concat_css', 'cssmin', 'concat', 'requirejs:prod']);
    });

    grunt.registerTask('dev', function () {        
        grunt.task.run(['sass', 'concat_css', 'concat', 'requirejs:dev']);
    });
};