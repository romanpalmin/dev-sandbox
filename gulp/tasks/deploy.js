/**
 * Отправляет скомпилированные файлы на сервер
 */

'use strict';


var gulp   = require('gulp');
var sftp   = require('gulp-sftp');
var config = require('../config').deploy;
var global = require('../config');
gulp.task('deploy', function () {
    return gulp.src(global.paths.dist)
        .pipe(sftp(config));
});