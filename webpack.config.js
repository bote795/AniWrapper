const path = require("path");
module.exports = {
  entry: ["babel-polyfill", "./lib/Anilist.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "Anilist.js",
    library: "Anilist",
    libraryTarget: "umd",
    globalObject: "this",
    libraryExport: "default"
  },
  externals: {
    "graphql-request": {
      commonjs: "graphql-request",
      commonjs2: "graphql-request",
      amd: "graphql-request",
      root: "_"
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader"
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development"
};