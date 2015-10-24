/**
 * Created by Roman on 24.10.2015.
 */
'use strict';

/////////////////////////////////////////////
// =             Watch task              = //
/////////////////////////////////////////////

// ������ �� ����������� � ������

var gulp   = require('gulp');
var config = require('../config').watch;

gulp.task('watch', function () {
    gulp.watch(config.css.src, ['cssCompile']);
    gulp.watch(config.js.src, ['jsCompile']);
});