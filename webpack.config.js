
const path = require('path');

module.exports = {
    entry: './app/App',
     output: {
         filename: 'bundle.js',
         path: path.resolve(__dirname, './public'),
         publicPath: '/public/',
     },

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react', 'stage-3']
                    }
                }]
            },
            {
                test:/\.css?$/,
                use:[{
                    loader:'style-loader'
                },{
                    loader:'css-loader',
                }]
            },
            {
                test: /\.svg$/,
                loader: 'svg-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
            }
        ]
    },
    watch:true
 };