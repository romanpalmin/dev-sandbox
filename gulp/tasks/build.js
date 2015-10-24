/**
 *
 * Вызывает компиляцию всех файлов по очереди
 *
 */

'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (cb) {
    return runSequence('clean', 'sass', 'css', 'js', 'vendor', 'images', 'copyindex', 'templates', 'jshint', cb);
});