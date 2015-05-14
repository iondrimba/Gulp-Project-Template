var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var sass = require('gulp-sass');
var requirejsOptimize = require('gulp-requirejs-optimize');
var concatCss = require('gulp-concat-css');
var globalConfig = {
    optimize: ''
};

var requirePaths = {
    jquery: 'node_modules/jquery/dist/jquery',
    backbone: 'node_modules/backbone/backbone',
    underscore: 'node_modules/underscore/underscore',
    views: 'scripts/app/views',
    vendors: 'scripts/vendors',
    routers: 'scripts/app/routers/router'
};

var paths = {
    scripts: ['Scripts/**/.js', 'Scripts/**/**/.js']
};

gulp.task('sass', function () {
    gulp.src('./css/app.scss')
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulp.dest('./css/build'));
});

gulp.task('concat_css', function () {
    return gulp.src('./css/vendors/*.css')
      .pipe(concatCss("./css/build/vendors.css"))
      .pipe(gulp.dest('./'));
});

gulp.task('cssmin', function () {
    gulp.src('css/build/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./css/build'));
});

gulp.task('scripts', function () {
    return gulp.src(['scripts/vendors/vendors1.js', 'scripts/vendors/vendors2.js'])
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest('scripts/build'));
});

gulp.task('minifyjs', function () {
    return gulp.src('Scripts/build/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('Scripts/build'));
});

gulp.task('requirejs', function () {
    return gulp.src('Scripts/app/main.js')
        .pipe(requirejsOptimize(function (file) {
            return {
                name: 'Scripts/app/main',
                out: 'Scripts/build/app.js',
                baseUrl: '',
                optimizeAllPluginResources: true,
                noGlobal: true,
                optimize: globalConfig.optimize,
                mainConfigFile: 'Scripts/app/main.js',
                allowSourceOverwrites: false,
                paths: requirePaths
            };
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('requiresjs-dev', function () {
    globalConfig.optimize = 'none';
    return gulp.run('requirejs');
});

gulp.task('requiresjs-prod', function () {
    globalConfig.optimize = 'uglify';
    return gulp.run('requirejs');
});

gulp.task('dev', ['sass', 'concat_css', 'scripts', 'requiresjs-dev'], function () {
});

gulp.task('prod', ['sass', 'concat_css', 'cssmin', 'scripts', 'minifyjs', 'requiresjs-prod'], function () {
});