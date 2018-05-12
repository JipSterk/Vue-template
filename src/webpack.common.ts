import * as CleanWebpackPlugin from 'clean-webpack-plugin';
import * as path from 'path';
import { VueLoaderPlugin } from 'vue-loader';
import * as webpack from 'webpack';

export const commonConfig: webpack.Configuration = {
    entry: [
        path.resolve(__dirname, 'app/index')
    ],
    resolve: {
        extensions: [
            '.js',
            '.ts',
            '.vue'
        ]
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.scss$/,
                loaders: ['vue-style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(jpe$g|png)/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(['dist'], { root: path.resolve(__dirname, '..'), verbose: false })
    ]
}