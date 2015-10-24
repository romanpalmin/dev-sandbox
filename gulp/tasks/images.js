/**
 * Оптимизирует и копирует изображения
 */
var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    flatten = require('gulp-flatten'),
    config = require('../config').images;

gulp.task('images', function () {
    return gulp.src(config.src)
        .pipe(imagemin())
        .pipe(flatten())
        .pipe(gulp.dest(config.dest))
});