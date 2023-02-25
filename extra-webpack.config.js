const webpack = require("webpack");
const path = require("path");

module.exports = {
  resolve: {
    fallback: {
      url: require.resolve("url/"),
      stream: require.resolve("stream-browserify"),
      assert: require.resolve("assert/"),
      http: require.resolve("http-browserify"),
      https: require.resolve("https-browserify"),
      os: require.resolve("os-browserify/browser"),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process",
    }),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new webpack.NormalModuleReplacementPlugin(
      /genesisStates\/[a-zA-Z]*\.json/,
      path.join(__dirname, "mocks/genesisStatesMock.json")
    ),
  ],
  node: {
    global: true,
  },
};
