"use strict";
var webpack = require("webpack");
var path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const externals = require("./build/webpack.prod.externals");

module.exports = env => ({
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "lib"),
    filename: "orbital.js",
    publicPath: "/lib/",
    library: "orbital",
    libraryTarget: "umd",
    umdNamedDefine: true // Important
  },
  externals: env.production ? externals : {},
  module: {
    rules: [
      {
        test: /\.js$/, //Check for all js files
        use: [
          {
            loader: "babel-loader",
            options: { babelrcRoots: [".", "../"] }
          }
        ],
        exclude: /(node_modules|bower_compontents)/
      },
      {
        test: /\.(css|sass|scss)$/, //Check for sass or scss file names
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.json$/,
        loader: "json-loader" //JSON loader
      }
    ]
  },
  resolve: {
    alias: {
    }
  },
  plugins: env.production ? [new BundleAnalyzerPlugin()] : [],
  //To run development server
  devServer: {
    contentBase: __dirname
  },
  devtool: "sourcmap"
});
