/**
 *
 * �������� ���������� ���� ������ �� �������
 *
 */

'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (cb) {
    return runSequence('clean', 'css', 'js', 'images', 'copyindex', 'templates', 'jshint', cb);
});