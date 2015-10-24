/**
 * линтуем JS
 */

'use strict';


var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var config = require('../config').js;
var stylish = require('jshint-stylish');

gulp.task('jshint', function () {
    return gulp.src(config.src)
        .pipe(jshint({esnext:true}))
        .pipe(jshint.reporter(stylish));
});