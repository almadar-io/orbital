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
  optimization: {
    usedExports: true
  },
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
      react: path.resolve("./node_modules/react"),
      "react-router-dom": path.resolve("./node_modules/react-router-dom"),
      Orbital: path.resolve(__dirname, "./orbital"),
      Templates: path.resolve(__dirname, "../orbital-templates/Material"),
      Theme: path.resolve(__dirname, "./theme.js"),
      Config: env
        ? env.production
          ? path.resolve(__dirname, "./config/prod.js")
          : path.resolve(__dirname, "./config/qa.js")
        : path.resolve(__dirname, "./config/index.js")
      // "@markab.io/react": path.resolve(
      //   __dirname,
      //   "../../../../react-services/lib/react-services.js"
      // )
    }
  },
  // plugins: [new BundleAnalyzerPlugin()],
  //To run development server
  devServer: {
    contentBase: __dirname
  },
  devtool: "sourcmap"
});
