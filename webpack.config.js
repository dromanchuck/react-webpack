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
                        presets: ['env', 'react']
                    }
                }]
            },
            {
                test:/\.css?$/,
                use:[{
                    loader:'style-loader'
                },{
                    loader:'css-loader',
                    options: {
                        modules: true
                    }
                }]
            }
        ]
    }
 };