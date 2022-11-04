const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  return {
    entry: env.mode === "development" ? "./src/index.tsx" : "./src/App.tsx",
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
      filename: "component.js",
      path: path.resolve(__dirname, "dist"),
      library: 'Component',
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
    plugins: [
      env.mode === "development" ? new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }) : () => {}
    ],
  };
};
