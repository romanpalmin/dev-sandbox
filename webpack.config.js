/**
 * webpack-конфиг
 */

var path = require('path');
module.exports = {
/*    devtool: 'source-map',*/
    output: {
        path: require("path").resolve("./src/assets/js"),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
};