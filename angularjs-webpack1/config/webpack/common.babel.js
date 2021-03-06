import path from 'path';
import webpack from 'webpack';
import ExtractPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const resolve = (rel) => path.resolve(process.cwd(), rel);
const include = resolve('./node_modules/bootstrap/dist');
const src = resolve('./src');
const exclude = /(node_modules|bower_components)/;

export default {
  entry: {
    app: './src/namespace.js'
  },

  output: {
    path: './dist',
    filename: '[name].js',
  },

  module: {
    preLoaders: [{
      exclude,
      include: src,
      test: /\.js$/,
      loader: 'source-map',
    }],

    loaders: [
      {
        exclude,
        include: src,
        test: /\.js$/i,
        loader: 'ng-annotate!babel',
      },
      {
        exclude,
        include: src,
        test: /\.js$/i,
        loader: 'babel',
        query: {
          presets: [
            'stage-0',
            'env',
          ],
          plugins: [
            'add-module-exports',
            'transform-class-properties',
          ]
        }
      },
      {
        test: /template.html$/i,
        loader: 'ng-cache?prefix=[dir]/[dir]',
      },
      {
        test: /\.css$/i,
        // include: [resolve('./node_modules/angular'), src],
        include: [resolve('./node_modules/angular'), include, src],
        loader: ExtractPlugin.extract('style', 'css?importloader=1', 'postcss'),
      },
      {
        include: src,
        test: /\.styl$/i,
        loader: ExtractPlugin.extract('style', 'css!postcss!stylus?sourceMap'),
      },
      {
        include,
        // loader: 'url',
        loader: 'url?limit=1024',
        test: /\.(eot|otf|woff(2)?|ttf|svg)?$/i,
      },
      /*
      {
        include,
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/i,
        loader: 'file'
      },
      {
        include,
        test: /\.(woff|woff2)$/i,
        loader:'url?prefix=font/&limit=1024',
      },
      {
        include,
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/i,
        loader: 'url?limit=1024&mimetype=application/octet-stream',
      },
      {
        include,
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/i,
        loader: 'url?limit=1024&mimetype=image/svg+xml',
      },
      */
    ]
  },

  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules']
  },

  plugins: [
    new ExtractPlugin('[name].css', { allChunks: true }),
    new HtmlWebpackPlugin({
      template: './src/namespace.html',
      favicon: './src/namespace.ico'
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    })
  ],

  postcss: [
    autoprefixer,
    cssnano
  ],

  node:{
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
