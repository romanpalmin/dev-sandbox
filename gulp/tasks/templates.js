/**
 * компилирует шаблоны
 */
var gulp = require('gulp'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    flatten = require('gulp-flatten'),
    dust = require('gulp-dust'),
    config = require('../config').templates;

gulp.task('templates', function () {
    gulp.src(config.src)
        .pipe(flatten())
        .pipe(dust())
        .pipe(concat('templates.all.min.js'))
        .pipe(gulp.dest(config.dest + '/templates'));
});