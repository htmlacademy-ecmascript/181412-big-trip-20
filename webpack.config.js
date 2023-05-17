const path = require('path');
const CopyPlugin = require('copy-webpack-plugin'); /* Плагин нужен для копирования файлов из public в сборочную папку build + добавлять бандл*/
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js', /*Точка входа*/
    output: {
        filename: "bundle.[contenthash].js", /* Имя общего сборочного файла */
        path: path.resolve(__dirname, 'build'), /* Имя папки, в которую собираем. URL абсолютный! */
        clean: true, /* Удаление папки build перед новой сборкой*/
    },
    devtool: 'source-map', /* Карта исходного кода */
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'public',
                    globOptions: {
                        ignore: ['**/index.html'],
                    }
                }
            ],
        }),
        new HtmlPlugin({
            template: "public/index.html"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
        ],
    },
};
