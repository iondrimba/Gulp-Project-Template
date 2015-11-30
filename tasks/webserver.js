var gulp = require('gulp');
var webserver = require('gulp-webserver');
module.exports = function() {
    gulp.src('./build')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true
        }));
};