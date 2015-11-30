var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var sass = require('gulp-sass');
var requirejsOptimize = require('gulp-requirejs-optimize');
var concatCss = require('gulp-concat-css');
var webserver = require('gulp-webserver');
var watch = require('gulp-watch');
var globalConfig = {
    optimize: ''
};

var requirePaths = {
    jquery: 'node_modules/jquery/dist/jquery',
    backbone: 'node_modules/backbone/backbone',
    underscore: 'node_modules/underscore/underscore',
    views: 'src/scripts/app/views',
    vendors: 'src/scripts/vendors',
    routers: 'src/scripts/app/routers/router'
};

var paths = {
    scripts: ['src/scripts/**/.js', 'src/scripts/**/**/.js']
};

gulp.task('sass', require('./tasks/sass.js'));

gulp.task('concat_css', require('./tasks/concat_css.js'));

gulp.task('cssmin', require('./tasks/cssmin.js'));

gulp.task('scripts', require('./tasks/scripts.js'));

gulp.task('minifyjs', require('./tasks/minifyjs.js'));

gulp.task('requirejs', require('./tasks/requirejs.js'));

gulp.task('watch', ['dev'], require('./tasks/watch.js'));

gulp.task('webserver', require('./tasks/webserver.js'));


gulp.task('requiresjs-dev', function() {
    globalConfig.optimize = 'none';
    return gulp.start('requirejs');
});

gulp.task('requiresjs-prod', function() {
    globalConfig.optimize = 'uglify';
    return gulp.start('requirejs');
});

gulp.task('dev', ['sass', 'concat_css', 'scripts', 'requiresjs-dev', 'webserver', 'watch'], function() {});

gulp.task('prod', ['sass', 'concat_css', 'cssmin', 'scripts', 'minifyjs', 'requiresjs-prod'], function() {});