const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./js/script.ts",
  resolve: {
    extensions: [".ts", ".js", ".vue"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader",
          options: { appendTsSuffixTo: [/\.vue$/] }
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader"
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  },
  output: {
    publicPath: "/dist/"
  },
  devServer: {
    contentBase: path.join(__dirname, ".")
  },
  plugins: [new VueLoaderPlugin()]
};
