'use strict';
var project = '/common';
var src = './src' + project;
var dist = './build' + project;
var assets = '/assets';
var srcAssets = src + assets;
var distAssets = dist + assets;

module.exports = {
    paths: {
        project: project,
        src: src,
        dist: dist,
        assets: assets,
        srcAssets: srcAssets,
        distAssets: distAssets
    },

    clean: {
        dest: dist
    },

    templates: {
        src: [srcAssets + '/js/modules/**/*.dust',
            srcAssets + '/templates/**/*.dust'],
        dest: distAssets + '/templates'
    },

    css: {
        src: [srcAssets + '/js/modules/**/*.css', '!' + srcAssets + '/modules/**/*.min.css',
            srcAssets + '/styles/**/*.css', '!' + srcAssets + '/styles/*.min.css'],
        dest: distAssets + '/css'
    },

    sass:{
        src: [srcAssets + '/js/modules/**/*.scss',
            srcAssets + '/styles/**/*.scss'],
        dest: srcAssets + '/styles'
    },

    js: {
        src: [srcAssets + '/js/*.js',
            srcAssets + '/modules/**/*.js',
            '!' + srcAssets + '/js/*.min.js',
            '!' + srcAssets + '/js/modules/**/*.min.js'
        ],
        destName: 'index.js',
        dest: distAssets + '/js'
    },

    watch: {
        src: src
    },

    images: {
        src: [srcAssets + '/**/images/**/*'],
        dest: distAssets + '/images'
    },

    deploy: {
        host: 'ftp.your.host',
        user: 'username',
        pass: 'password',
        remotePath: '/www/path/to/folder'
    },

    vendors: {
        src: {
            js: ['./node_modules/dustjs-linkedin/dist/dust-core.min.js'],
            css: []
        },
        dist: {
            js: distAssets + '/js/vendor',
            css: distAssets + '/css/vendor'
        }
    },

    gc:{
        src:[src + '/**/*.compiled.css']
    }
};