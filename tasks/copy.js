var gulp = require('gulp');

module.exports = function() {
    return gulp.src('src/scripts/require.js')
        .pipe(gulp.dest('./public/scripts'));
};