const { pagesEntry } = require('@megalo/entry')
const createMegaloTarget = require('@megalo/target')
const compiler = require('@megalo/template-compiler')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");

const _ = require( './util' );
const appMainFile = _.resolve('src/app.js')
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

const cssLoaders = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  px2rpxLoader
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
        src: _.resolve(`./node_modules/octoparse/lib/platform/${platform}`)
      },
    } ),

    entry: {
      'app': appMainFile,
      ...pagesEntry(appMainFile)
    },

    output: {
      path: _.resolve( `dist-${platform}/` ),
      filename: 'assets/js/[name].js'
    },

    devServer: {
      // hot: true,
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
      },
      // minimize: true
    },

    // devtool: 'cheap-source-map',
    devtool: false,

    resolve: {
      extensions: ['.vue', '.js', '.json', '.css'],
      mainFiles: ['index', `index.${platform}`, 'index.default'],
      alias: {
        'vue': 'megalo',
        '@': _.resolve('src'),
        'assets': _.resolve('src/assets')
      }
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
          test: /\.(jpeg|jpg|png|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: `../dist-${platform}/assets/image`
              }
            }
          ]
        }
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
      }])
    ],

    stats: 'errors-only'
  }
}

module.exports = createBaseConfig
