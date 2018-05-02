process.env.NODE_ENV = 'development'
const proc = require('child_process')
require('./build-ui').ready.then(() => {
  console.log('> Start Electron ...')
  const child = proc.spawn('./node_modules/.bin/electron', ['.'], {stdio: 'inherit'})
  child.on('close', function (code) {
    process.exit(code)
  })
})