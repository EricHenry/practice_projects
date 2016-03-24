module.exports = {
    entry: './app/components/Main.js',
    output: {
        path: './public',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 3333
    }
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
