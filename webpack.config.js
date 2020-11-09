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
<<<<<<< HEAD
=======
        historyApiFallback: true,
>>>>>>> 3e39f65b14999c75186ea351aa625f32717198cd
||||||| 26e337e
=======
        historyApiFallback: true,
>>>>>>> ee660ffdecdc90dda74bb9322862d801d49f6796
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
