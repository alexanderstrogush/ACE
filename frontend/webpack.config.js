var path = require('path');
module.exports = {
    module: {
         rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                         loader: "babel-loader"
                         }
                },
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader'
                }
         ]
    },
    watch : true,
    entry: {
            'form': './src/formExample/index.js',
            'table': './src/tableExample/index.js',
    },
    output: {
        filename: 'bundled.[name].js',
        path: path.resolve("../backend/src/main/resources/static/js/bundle")
    }
};