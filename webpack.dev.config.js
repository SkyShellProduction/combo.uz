const {merge} = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.config');
const webpack = require('webpack');
// console.log(webpack);
const devConfig = merge(baseConfig, {
    mode: 'development',
    devServer: {
        port: 'auto',
        static: {
            directory: path.join(__dirname, './src'),
            watch: true
        },
        hot: true,
        compress: true,
        // liveReload: true,
        client: {
            overlay: {
                errors: true,
                warnings: false
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
});
module.exports = new Promise((resolve, reject) => {
    resolve(devConfig);
});