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

gulp.task('sass', function () {
    gulp.src('./src/css/app.scss')
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulp.dest('./build/css/'));
});

gulp.task('concat_css', function () {
    return gulp.src('./src/css/vendors/*.css')
      .pipe(concatCss("./build/css/vendors.css"))
      .pipe(gulp.dest('./'));
});

gulp.task('cssmin', function () {
    gulp.src('build/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('scripts', function () {
    return gulp.src(['src/scripts/vendors/vendors1.js', 'src/scripts/vendors/vendors2.js'])
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest('build/scripts'));
});

gulp.task('minifyjs', function () {
    return gulp.src('build/scripts/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('build/scripts'));
});


gulp.task('requirejs', function () {
    return gulp.src('src/scripts/app/main.js')
        .pipe(requirejsOptimize(function (file) {
            return {
                name: 'src/scripts/app/main',
                out: 'build/scripts/app.js',
                baseUrl: '',
                optimizeAllPluginResources: true,
                noGlobal: true,
                optimize: globalConfig.optimize,
                mainConfigFile: 'src/scripts/app/main.js',
                allowSourceOverwrites: false,
                paths: requirePaths
            };
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', ['dev'], function () {
    gulp.watch('./src/css/**/*.{sass,scss}', ['sass']);
    gulp.watch('./src/scripts/**/*.js', ['scripts']);
});

gulp.task('webserver', function() {
    gulp.src('./build' )
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true
        }));
});

gulp.task('requiresjs-dev', function () {
    globalConfig.optimize = 'none';
    return gulp.start('requirejs');
});

gulp.task('requiresjs-prod', function () {
    globalConfig.optimize = 'uglify';
    return gulp.start('requirejs');
});

gulp.task('dev', ['sass', 'concat_css', 'scripts', 'requiresjs-dev', 'webserver', 'watch'], function () {
});

gulp.task('prod', ['sass', 'concat_css', 'cssmin', 'scripts', 'minifyjs', 'requiresjs-prod'], function () {
});


