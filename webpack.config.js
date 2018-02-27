var path = require('path');

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
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react"]
                    }
                }]
            }
        ]
    }
 };