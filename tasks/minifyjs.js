var gulp = require('gulp');
var uglify = require('gulp-uglify');
module.exports = function() {
    return gulp.src('build/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/scripts'));
};