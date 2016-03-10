var gulp = require('gulp');

gulp.task('sass', require('./tasks/sass.js'));

gulp.task('concat_css', require('./tasks/concat_css.js'));

gulp.task('cssmin', require('./tasks/cssmin.js'));

gulp.task('scripts', require('./tasks/scripts.js'));

gulp.task('minifyjs', require('./tasks/minifyjs.js'));

gulp.task('requirejs', require('./tasks/requirejs.js'));

gulp.task('watch', require('./tasks/watch.js'));

gulp.task('browser-sync', require('./tasks/browser-sync.js'));

gulp.task('copy', require('./tasks/copy.js'));

gulp.task('default', ['sass', 'concat_css', 'scripts', 'requirejs', 'copy', 'browser-sync', 'watch']);

gulp.task('prod', ['sass', 'concat_css', 'cssmin', 'scripts', 'minifyjs', 'requirejs', 'copy']);