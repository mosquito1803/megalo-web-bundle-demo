const { pagesEntry } = require('@megalo/entry')
const createMegaloTarget = require('@megalo/target')
const compiler = require('@megalo/template-compiler')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const compiler = require('vue-template-compiler')

const _ = require( './util' );
const appMainFile = _.resolve('src/app.js')
const path = require('path');

const cssLoaders = [
  MiniCssExtractPlugin.loader,
  'css-loader'
]

const platform = "web";

module.exports = function (dir) {
  
  return {
    mode: 'development',

    entry: {
      'index': path.join(__dirname, `../src/pages/${dir}/index.js`)
    },

    output: {
      path: _.resolve( `dist-web/${dir}` ),
      filename: '[name].js',
      publicPath: `/${dir}`
    },

    optimization: {
      runtimeChunk: {
        name: 'runtime'
      },
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all'
          }
        }
      }
    },

    devtool: 'cheap-source-map',

    resolve: {
      extensions: ['.vue', '.js', '.json'],
      alias: {
        '@': _.resolve('src'),
        'assets': _.resolve('src/assets')
      },
    },

    module: {
      rules: [
        {
          test: /\.vue$/,
          use: [
            {
              loader: 'vue-loader',
              options: {
                compilerOptions: {
                  modules: []
                }
              }
            }
          ]
        },

        {
          test: /\.js$/,
          use: 'babel-loader'
        },

        {
          test: /\.css$/,
          use: [
            ...cssLoaders, 
            'postcss-loader'
          ]
        },

        {
          test: /\.scss$/,
          use: [
            ...cssLoaders,
            'sass-loader',
          ]
        },

        {
          test: /\.(jpeg|jpg|png|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: `../dist-${platform}/assets/image`
              }
            }
          ]
        },

        // {
        //   test: /\.(js|vue)$/,
        //   include: path.join(__dirname, '../src'),
        //   loader: 'eslint-loader',
        //   enforce: 'pre',
        //   options: {
        //     formatter: require('eslint-friendly-formatter'),
        //     emitWarning: true
        //   }
        // }
      ]
    },

    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: `./assets/css/[name].css`,
        publicPath: `../dist-${platform}`
      }),
      new CopyWebpackPlugin([{
        from: 'src/assets', to: 'assets',
        ignore: 'src/assets/html'
      }]),
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'src/assets/html/index.html'
      })
    ],

    stats: 'errors-only'
  }
}
