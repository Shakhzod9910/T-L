module.exports = {
  reactStrictMode: true,
  module: {
    rules: [
      {
        test: /\.woff(2)?(\?[a-z0-9]+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.(ttf|eot|svg)(\?[a-z0-9]+)?$/,
        loader: "file-loader"
      }
    ],
  },
}