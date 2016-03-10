var gulp = require('gulp');
var concat = require('gulp-concat');
module.exports = function() {
    return gulp.src(['src/scripts/vendors/vendors1.js', 'src/scripts/vendors/vendors2.js'])
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest('public/scripts'));
};