/**
 * webpack-конфиг
 */
module.exports = {
    output: {
        path: require("path").resolve("./src/assets/js"),
        filename: 'index.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
};