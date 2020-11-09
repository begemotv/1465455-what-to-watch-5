const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        open: false,
        port: 1337,
<<<<<<< HEAD
=======
        historyApiFallback: true,
>>>>>>> 3e39f65b14999c75186ea351aa625f32717198cd
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
};
