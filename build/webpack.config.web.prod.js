const { pagesEntry } = require('./util')
const createMegaloTarget = require('@megalo/target')
const compiler = require('@megalo/template-compiler')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const _ = require('./util');
const path = require('path');

const cssLoaders = [
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
        loader: 'postcss-loader', 
        options: { 
            plugins: () => [
                require('autoprefixer')(),
                require('postcss-plugin-px2rem')({ 
                    rootValue: 75,
                    propBlackList: ['border']
                })
            ]
        }
    }
]

const platform = "web";

module.exports = {
    mode: 'production',

    entry: {
        'index': path.join(__dirname, '../dist-web/webEntry.js')
    },

    target: createMegaloTarget({
        platform
    }),

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
        extensions: ['.vue', '.js', '.json', '.css', '.ts', '.tsx'],
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
    ]
}
