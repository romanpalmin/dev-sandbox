/**
 * Created by Roman on 24.10.2015.
 *
 * Компилирует CSS из SASS
 */

'use strict';
var gulp = require('gulp');
var config = require('../config').sass;
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('sass', function () {
    return gulp.src(config.src)
        .pipe(sass())
        .pipe(rename({suffix: '.compiled'}))
        .pipe(gulp.dest(config.dest));
});