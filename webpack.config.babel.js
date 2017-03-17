const webpack = require("webpack");
const path = require('path');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
  entry: [
    'babel-polyfill',
    `./src/javascripts/main.js`
  ],

  output: {
    path: path.join(__dirname, 'public/javascripts'),
    filename: 'main.bundle.js'
  },

  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  // Configuration for dev server
  devServer: {
    contentBase: __dirname + '/dist',
    port: 9000,
    hot: true
  }

}, {
  entry: {
    style: './src/stylesheets/main.js'
  },

  output: {
    path: path.join(__dirname, 'public/stylesheets'),
    filename: '[name].css'
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("[name].css")
  ],

}];