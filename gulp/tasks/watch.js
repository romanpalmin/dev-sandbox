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
console.log(config.images.src);
gulp.task('watch', function () {
    gulp.watch(config.css.src, ['css']);
    gulp.watch(config.js.src, ['js']);
    gulp.watch(config.sass.src, ['sass']);
    gulp.watch(config.images.src, ['images']);
    gulp.watch(config.templates.src, ['templates'])
});