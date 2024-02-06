const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const path = require("node:path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ttf$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [new MonacoWebpackPlugin()],
};
