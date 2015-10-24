/**
 * Created by Roman on 24.10.2015.
 */
'use strict';

/////////////////////////////////////////////
// =             Watch task              = //
/////////////////////////////////////////////

// Следит за изменениями в файлах

var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', function () {
    gulp.watch(config.css.src, ['css']);
    gulp.watch(config.js.src, ['js']);
});