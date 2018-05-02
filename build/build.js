process.env.NODE_ENV = 'production'
require('./build-ui').ready.then(() => {
// TODO build electron
})