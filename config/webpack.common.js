var helpers = require('./helpers');
var webpack = require('webpack');

const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = function (options) {
  let ENV = JSON.stringify(options.env);

  return {
    entry: {
      'polyfills': './src/polyfills.ts',
      'vendor': './src/vendor.ts',
      'app': './src/main.ts'
    },
    resolve: {
      extensions: ['*', '.js', '.ts'],
    },
    module: {
      loaders: [
        {
          test: /\.ts$/,
          loaders: [
            'awesome-typescript-loader',
            'angular-router-loader',
            'angular2-template-loader'
          ]
        },
        {
          test: /\.html$/,
          use: 'raw-loader',
          exclude: [helpers.root('src/index.html')]
        },
        {
          test: /\.scss$/,
          use: ['to-string-loader', 'css-loader', 'sass-loader'],
        },
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'ENV': ENV,
        'process.env.ENV': ENV,
        'process.env.NODE_ENV': ENV,
      }),
      new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core/, // (\\|\/) for *nix and Windows
        helpers.root('./src'), // location of your src
        { }
      ),
      new CommonsChunkPlugin({
        names: ['app', 'vendor', 'polyfills'],
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: 'body',
        title: 'Angular Nimble Starter',
        favicon: 'client/assets/images/favicon.png',
        showErrors: true
      })
    ],
  };
};
