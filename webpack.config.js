var webpack = require('webpack');
module.exports = {
    context: __dirname+ '/src',
    entry: './index.js',
    output:{
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    plugins:[
        new webpack.LoaderOptionsPlugin({
            options: {
                context : __dirname
            }
        })
    ]
}