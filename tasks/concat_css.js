﻿var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
module.exports = function () {
    return gulp.src('./src/css/vendors/*.css')
      .pipe(concatCss("./public/css/vendors.css"))
      .pipe(gulp.dest('./'));
};