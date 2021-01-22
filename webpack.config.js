const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/entry.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", "*"],
    fallback: {
      // path: false,
      // crypto: false,
      // https: false,
      // url: false,
      // http: false,
      // vm: false,
      // querystring: false,
      // os: false,
      // buffer: false,
      // stream: false,
      // constants: false,
      // assert: false,
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify") ,
      "https": require.resolve("https-browserify"),
      "http": require.resolve("stream-http"),
      "url": require.resolve("url/"),
      "vm": require.resolve("vm-browserify"),
      "buffer": require.resolve("buffer/"),
      "stream": require.resolve("stream-browserify"),
      "querystring": false,
      "os": false,
      "constants": require.resolve("constants-browserify"),
      "assert": require.resolve("assert/")
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/env", "@babel/react"],
            },
          },
        ],
      },
    ],
  },
  devtool: "source-map",
};
