const path = require('path');

module.exports = {
//start with the index.js file and bundle all modules that we are depends on in bundle.js
  entry: './src/index.js',
  output: {
    path: path.resolve('public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        //load any js file under babel-loader
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};