﻿var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
module.exports = function () {
    gulp.src('public/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./public/css'));
};