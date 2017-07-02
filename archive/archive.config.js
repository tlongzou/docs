// Config and utils
const path = require('path')
const webpack = require('webpack')
const vueConfig = require('../build/vue-loader.config')

// Plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// Helpers
const resolve = (file) => path.resolve(__dirname, file)
const isProd = process.env.NODE_ENV === 'production'
const release = (process.env.RELEASE).toString()
const rimraf = require('rimraf')
const copyTo = `releases/${release}/`

// Remove release if already exists
rimraf(resolve(`../releases/${release}`), err => err && console.log(err))

module.exports = {
  entry: resolve('./archive.js'),
  output: {
    path: resolve(`../releases/${release}/public`),
    publicPath: `/releases/${release}/public/`,
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['*', '.js', '.json', '.vue'],
    alias: {
      'assets': resolve('../assets'),
      'components': resolve('../components'),
      'examples': resolve('../examples'),
      'layouts': resolve('../layouts'),
      'pages': resolve('../pages'),
      'public': resolve('../public'),
      'router': resolve('../router'),
      'static': resolve('../static'),
      'store': resolve('../store'),
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module: {
    noParse: [
      /es6-promise\.js$/,
      /releases/
    ], // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        },
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        loader: ['style', 'css', 'stylus']
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? 'warning' : false
  },
  plugins: [
    // extract vendor chunks for better caching
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        // a module is extracted into the vendor chunk if...
        return (
          // it's inside node_modules
          /node_modules/.test(module.context) &&
          // and not a CSS file (due to extract-text-webpack-plugin limitation)
          !/\.css$/.test(module.request)
        )
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new ExtractTextPlugin({
      filename: '[name].[hash].css'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      'process.env.RELEASE': release,
      'process.env.VUE_ENV': '"client"'
    }),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'archive/archive.template.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    }),
    new CopyWebpackPlugin([
      {
        from: 'static',
        to: '../static',
        ignore: ['.*']
      },
      {
        from: 'examples',
        to: '../examples',
        ignore: ['.*']
      },
      {
        from: 'pages',
        to: '../pages',
        ignore: ['.*']
      }
    ])
  ]
}
