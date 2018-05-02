if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = 'production'
}

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('./config')
const webpackConfig = require(process.env.NODE_ENV === 'production' ? './webpack.prod.conf' : './webpack.dev.conf')

let _resolve
const readyPromise = new Promise(resolve => {
  _resolve = resolve
})

const spinner = ora(`building for ${process.env.NODE_ENV}...`)
spinner.start()

rm(path.join(config.assetsRoot, config.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    _resolve()
  })
})

module.exports = {
  ready: readyPromise
}
