const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development", 
  entry: "./src/lesson16.html", 
  devtool: "eval-source-map",
  output: {
    path:path.resolve(__dirname, "dist"), 
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'style-loader'],
      },
      {
        test: /\.less$/,
        loader: "less-loader", // compiles Less to CSS
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ]
  },
}
