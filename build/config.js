const path = require('path')
const assetsFolderName = 'assets'

module.exports = {
  assetsFolderName: assetsFolderName,
  index: path.resolve(__dirname, `../${assetsFolderName}/index.html`),
  assetsRoot: path.resolve(__dirname, `../${assetsFolderName}`),
  assetsSubDirectory: 'static',
  assetsPublicPath: './',
  build: {
    env: {
      NODE_ENV: '"production"'
    },
    productionSourceMap: false,
  },
  dev: {
    env: {
      NODE_ENV: '"development"'
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
    proxyTable: []
  }
}
