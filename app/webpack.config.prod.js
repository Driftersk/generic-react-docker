const webpack = require('webpack');

const paths = require('./webpack.paths');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    paths.javascriptEntryPath,
    paths.htmlEntryPath
  ],
   output: {
    path: paths.buildPath,
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /.html$/,
      loader: 'file-loader?name=[name].[ext]',
    }, {
      test: /\.styl$/,
      loader: 'style-loader!css-loader!stylus-loader'
    }, {
      test: /\.(jpg|png|svg|bmp|gif)$/,
      loader: 'file-loader?name=[path][name].[ext]'
    }],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true
      }
    })
  ]
};
