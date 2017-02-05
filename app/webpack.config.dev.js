const webpack = require('webpack');

const paths = require('./webpack.paths');

module.exports = {
  devServer: {
    hot: true,
    contentBase: './src/',
    host: '0.0.0.0',
    stats: 'minimal'
  },
  devtool: 'cheap-module-eval-source-map',
  entry: [
    paths.javascriptEntryPath,
    paths.htmlEntryPath
  ],
  output: {
    path: paths.buildPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot-loader', 'babel-loader']
    }, {
      test: /\.html$/,
      loader: 'file-loader?name=[name].[ext]'
    }, {
      test: /\.styl$/,
      loader: 'style-loader!css-loader!stylus-loader'
    }, {
      test: /\.(jpg|png|svg|bmp|gif)$/,
      loader: 'file-loader?name=[path][name].[ext]'
    }]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
