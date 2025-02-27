const path = require("path");
const webpack = require("webpack");

const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

console.log("prod?", prod);

module.exports = {
  entry: "./main.js",
  watch: true,
  resolve: {
    alias: {
      assert: "assert",
      buffer: "buffer",
      crypto: "crypto-browserify",
      http: "stream-http",
      https: "https-browserify",
      os: "os-browserify/browser",
      process: "process/browser",
      stream: "stream-browserify",
      util: "util",
    },
    extensions: [".mjs", ".js"],
    mainFields: ["browser", "module", "main"],
  },
  output: {
    path: path.join(__dirname, "/flake-v5/web3"),
    filename: "[name].js",
    chunkFilename: "[name].[id].js",
    // publicPath: "/flake-v5/",
    clean: true,
    asyncChunks: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "entry",
                  corejs: "3.21.1",
                },
              ],
            ],
          },
        },
      },
    ],
  },
  experiments: {
    asyncWebAssembly: true,
  },
  mode,
  plugins: [
    new webpack.ProvidePlugin({
      process: "process",
      Buffer: ["buffer", "Buffer"],
    }),
  ],
  devtool: prod ? false : "source-map",
  devServer: {
    hot: false,
    liveReload: true,
    static: {
      directory: path.join(__dirname, "flake-v5"),
    },
    watchFiles: ["flake-v5/web3/**"],
  },
};
