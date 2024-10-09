// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/main.js',  // Your main JavaScript file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output folder
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'dist'), // Serve content from "dist"
      },
      {
        directory: path.join(__dirname, 'public'), // Serve additional static files from "public"
      },
    ],
    port: 9000,  // Port for the dev server
    hot: true,  // Enable hot module replacement
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Apply to JavaScript files
        exclude: /node_modules/,  // Don't transpile node_modules
        use: {
          loader: 'babel-loader',  // Use Babel loader for transpiling
        },
      },
      {
        test: /\.css$/,  // Apply to CSS files
        use: ['style-loader', 'css-loader'],  // Use style-loader and css-loader
      },
    ],
  },
};
