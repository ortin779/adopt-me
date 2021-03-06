const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require('./config/config.js')

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "App.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath:"/"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  optimization: {
    minimize: false,
  },
  devServer: {
    static: "./dist",
    compress: true,
    port: config.PORT || 3000,
    hot: true,
    historyApiFallback:true
  },
};
