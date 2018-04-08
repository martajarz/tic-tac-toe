const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{ loader: "html-loader", options: { minimize: true }}]
            },
            {
                test: /\.scss$/,
                // use: [
                //     miniCssExtractPlugin.loader,
                //     "css-loader",
                //     "postcss-loader",
                //     "sass-loader"
                // ]
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                    },
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "src/index.html",
            filename: "./index.html"
        }),
        // new miniCssExtractPlugin({
        //     filename: "[name].css",
        //     chunkFilename: "[id].css"
        // })
    ]
};