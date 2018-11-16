const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: {
        app: './client/index.js',
        'production-dependencies': ['phaser']
    },

    output: {
        path: path.resolve(__dirname, 'build/js'),
        filename: 'app.bundle.js',
        publicPath: '/js'
    },
    watchOptions: {
        poll: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'client/'),
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'build')
    },

    plugins: [
        new CopyWebpackPlugin([{
                from: path.resolve(__dirname, 'index.html'),
                to: path.resolve(__dirname, 'build')
            },
            {
                from: path.resolve(__dirname, 'assets', '**', '*'),
                to: path.resolve(__dirname, 'build')
            }
        ]),
        new webpack.DefinePlugin({
            'typeof CANVAS_RENDERER': JSON.stringify(true),
            'typeof WEBGL_RENDERER': JSON.stringify(true)
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'production-dependencies',
            filename: 'production-dependencies.bundle.js'
        }),
        new LiveReloadPlugin()
    ]
}