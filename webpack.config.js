const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/js/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
      static: {directory:path.resolve(__dirname, 'dist'),
    },
      port: 5000,
      open: true,
      hot: true,
    },
    module: {
        rules: [
          {test: /\.css$/, use: ['style-loader','css-loader']},
          {test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource'},
          {test: /\.js$/, exclude: /node_modules/, use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }},
        ],
      },
    plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/temp.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'product.html',
      template: path.resolve(__dirname, 'src/product.html')
    }),
  ],
}