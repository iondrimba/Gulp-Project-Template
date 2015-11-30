var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
module.exports = function () {
    gulp.src('build/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./build/css'));
};