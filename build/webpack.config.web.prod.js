const { pagesEntry } = require('@megalo/entry')
const createMegaloTarget = require('@megalo/target')
const compiler = require('@megalo/template-compiler')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const _ = require('./util');
const path = require('path');

const cssLoaders = [
    MiniCssExtractPlugin.loader,
    'css-loader'
]

const platform = "web";

module.exports = {
    mode: 'production',

    entry: {
        'index': path.join(__dirname, '../dist-web/webEntry.js')
    },

    output: {
        path: _.resolve(`dist-web`),
        filename: '[name].[contenthash].js',
        chunkFilename: '[id].[contenthash].js',
        publicPath: ``
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor.[contenthash]',
                    chunks: 'all'
                }
            }
        }
    },

    devtool: false,

    resolve: {
        extensions: ['.vue', '.js', '.json'],
        alias: {
            '@': _.resolve('src'),
            'assets': _.resolve('src/assets'),
            'vue$': 'vue/dist/vue.esm.js'
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
            template: 'src/web/index.html'
        })
    ],

    stats: 'errors-only'
}
