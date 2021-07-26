const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = (env, argv) => {
  console.log(env, argv);
  let config = {};
  config.module = {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.jsx|js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.json$/,
        use: ["json-loader"],
      },
    ],
  };

  config.optimization = {
    splitChunks: { chunks: "all" },
  };
  config.plugins = [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new Dotenv({
      path: `./.env.${argv.mode}`,
    }),
  ];

  config.devServer = {
    historyApiFallback: true,
  };

  return config;
};
