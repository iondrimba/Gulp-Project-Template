var gulp = require('gulp');
var watch = require('gulp-watch');
module.exports = function() {
    gulp.watch('./src/css/**/*.{sass,scss}', ['sass']);
    gulp.watch('./src/scripts/**/*.js', ['scripts', 'requirejs']);
};