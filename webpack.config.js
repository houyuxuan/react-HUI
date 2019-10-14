const path = require('path')
module.exports = {
    entry: {
        index: './lib/index.tsx'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.ts', '.tsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'hou',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }, 
            {
                test: /\.svg?$/,
                loader: 'svg-sprite-loader'
            }
        ]
    },
}