const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  return {
    entry: "./src",
    mode: env.mode,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    output: {
      filename: "header-github.js",
      path: path.resolve(__dirname, "dist"),
      library: {
        name: "Test",
        type: "umd",
      },
    },
    plugins: [
      env.mode === "development" ? new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }) : () => {}
    ],
  };
};
