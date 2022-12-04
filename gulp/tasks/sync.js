const browserSync = require('browser-sync')

module.exports = sync = () => {
  browserSync.init({
    server: {
      baseDir: './dist/',
    },
    notify: false,
  })
}
