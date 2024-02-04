const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point of your application
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js' // Output bundle filename
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Use babel-loader for JavaScript/JSX files
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'] // Use presets for transpiling ES6/React code
                    }
                }
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Change 'public' to the directory where your HTML file is located
        },
        historyApiFallback: true,
    }
};