const webpack = require("webpack")
module.exports = function override(config, _env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    stream: require.resolve("stream-browserify"),
    crypto: require.resolve("crypto-browserify"),
    assert: require.resolve("assert/"),
    http: require.resolve("http-browserify"),
    https: require.resolve("https-browserify"),
    url: require.resolve("url/"),
    os: require.resolve("os-browserify/browser"),
    buffer: require.resolve("buffer")
  }
  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      process: "process",
      Buffer: ["buffer", "Buffer"]
    })
  ]
  config.node = {
    ...config.node,
    global: true
  }
  return config
}
