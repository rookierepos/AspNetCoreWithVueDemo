const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  css: undefined,
  baseUrl: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: false,
  parallel: undefined,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.html$|\.css$/,
            threshold: 1024,
            deleteOriginalAssets: false
          })
        ]
      };
    }
  }
};
