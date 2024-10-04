// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/main.js',  // Your main JavaScript file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output folder
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve content from "dist"
    },
    port: 9000,  // Port for the dev server
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Apply to JavaScript files
        exclude: /node_modules/,  // Don't transpile node_modules
        use: {
          loader: 'babel-loader',  // Use Babel loader
        },
      },
    ],
  },
};
