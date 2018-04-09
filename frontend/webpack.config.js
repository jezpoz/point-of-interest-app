const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/src/index.tsx'),
    output: {
        path: __dirname + '/dist/',
        filename: 'app.js',
    },
    devtool: "source-map",
    resolve: {
        extensions: [
            ".ts", ".tsx", ".js", ".json",
        ]
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
            }, {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            }, {
                test: /\.scss$/,
                use: [{
                        loader: "style-loader",
                    }, {
                        loader: "css-loader",
                        options: {
                            sourcemap: true,
                        }
                    }, {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            }, {
                test: /\.sass$/,
                use: [{
                        loader: "style-loader",
                    }, {
                        loader: "css-loader",
                        options: {
                            sourcemap: true,
                        }
                    }, {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
};