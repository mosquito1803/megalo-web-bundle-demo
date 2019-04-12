const { resolve } = require('./util')
const { pagesEntry } = require('@megalo/entry')
const createMegaloTarget = require('@megalo/target')
const compiler = require('@megalo/template-compiler')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const webpack = require('webpack')

const appMainFile = resolve('src/app.js')
const CSS_EXT = {
  wechat: 'wxss',
  alipay: 'acss',
  swan: 'css',
};

const px2rpxLoader = {
  loader: '@megalo/px2rpx-loader',
  options: {
    rpxUnit: 0.5
  }
}

const rem2pxLoader = {
  loader: path.join(__dirname, './rem2px-loader'),
  options: {
    pxUnit: 50
  }
}

const cssLoaders = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  px2rpxLoader,
  rem2pxLoader
]

function createBaseConfig( platform = 'wechat' ) {
  const cssExt = CSS_EXT[platform]
  
  return {
    mode: 'development',

    target: createMegaloTarget( {
      compiler: Object.assign( compiler, { } ),
      platform,
      htmlParse: {
        templateName: 'octoParse',
        src: resolve(`./node_modules/octoparse/lib/platform/${platform}`)
      },
    } ),

    entry: {
      'app': appMainFile,
      ...pagesEntry(appMainFile)
    },

    output: {
      path: resolve( `dist-${platform}/` ),
      filename: 'assets/js/[name].js'
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

    devtool: false,

    resolve: {
      extensions: ['.vue', '.js', '.json', '.css', '.ts', '.tsx'],
      mainFiles: [`index.${platform}`, 'index'],
      alias: {
        'vue': 'megalo',
        '@': resolve('src'),
        'assets': resolve('src/assets')
      }
    },

    module: {
      rules: [
        {
          test: /\.vue$/,
          use: [
            {
              loader: 'vue-loader',
              options: {}
            }
          ]
        },

        {
          test: /\.js|\.tsx?$/,
          use: 'babel-loader'
        },

        {
          test: /\.css$/,
          use: cssLoaders
        },

        {
          test: /\.scss$/,
          use: [
            ...cssLoaders,
            'sass-loader',
          ]
        },

        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          }
        },
      ]
    },

    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: `./assets/css/[name].${cssExt}`,
        publicPath: `../dist-${platform}`
      }),
      new CopyWebpackPlugin([{
        from: 'src/assets', to: 'assets'
      }]),
      new webpack.ProvidePlugin({
        'Megalo': [path.resolve(`./node_modules/@megalo/api/platforms/${platform}`), 'default']
      })
    ],

    stats: {
      all: false,
      modules: false,
      maxModules: 0,
      errors: true,
      warnings: true,
      moduleTrace: false,
      errorDetails: true
  }
  }
}

module.exports = createBaseConfig
