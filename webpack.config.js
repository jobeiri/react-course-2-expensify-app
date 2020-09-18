const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { TRUE } = require("node-sass");

module.exports = (env) => {
  const isProduction = env === "production";
  console.log("env", env);
  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          /*
          use: [
            new MiniCssExtractPlugin(),
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
          */
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                sourceMap: true,
              },
            },
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "styles.css",
      }),
    ],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
    },
  };
};
