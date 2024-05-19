const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js' // Output bundle file name
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Transpile both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' // Use Babel loader for transpiling JSX and ES6/ESNext
        }
      },
      {
        test: /\.css$/, // Process CSS files
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html' // Path to your HTML template file
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'] // Automatically resolve .js and .jsx extensions
  },
  devServer: {
    contentBase: './dist', // Serve content from the 'dist' directory
    hot: true, // Enable hot module replacement
    port: 3000 // Set dev server port to 3000
  },
  node: {
    stream: false
  },
};
