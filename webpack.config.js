var webpack = require('webpack');

module.exports = {
    context: __dirname+ '/src',
    entry: './index.js',
    output:{
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    plugins:[
        new webpack.DefinePlugin({
            ON_TEST : process.env.NODE_ENV == 'test'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                context : __dirname
            }
        })
    ],
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/},
            {test: /\.css/, loader: 'style-loader!css-loader', exclude: /node_modules/}
        ]
    }
}