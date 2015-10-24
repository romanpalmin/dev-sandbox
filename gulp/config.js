'use strict';
var project = '/common';
var src  = './src' + project;
var dist = './build' + project;
var assets = '/assets';
var srcAssets = src + assets;
var distAssets = src + assets;

module.exports = {
    clean: {
        dest: dist
    },

    css: {
        src:
           [srcAssets + '/modules/**/*.css', '!' + srcAssets + '/modules/**/*.min.css',
            srcAssets + '/styles/*.css', '!' + srcAssets + '/styles/*.min.css'],
        dest: distAssets + '/css'
    },

    sass: {
        resultName: 'all.css',
        src: srcAssets + '/sass/*.sass'
    },

    js: {
        src:
           [srcAssets + '/js/*.js',
            srcAssets + '/modules/**/*.js',
            '!' + srcPath + '/js/*.min.js',
            '!' + srcPath + '/js/modules/**/*.min.js'
           ],
        destName: 'bundle.js',
        dest: dist + '/js'
    },

    watch: {
        src: src
    },

    images: {
        src: src + '/images/**/*',
        dest: dist + '/images'
    },

    deploy: {
        host: 'host',
        user: 'user',
        pass: 'pass',
        remotePath: '/var/path/to'
    },

    fonts: {
        cssDest: dist + '/css',
        fontsDest: dist + '/fonts',
        src: src + '/fonts'
    }
};