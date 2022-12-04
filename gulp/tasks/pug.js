const pug = require('gulp-pug')
const browserSync = require('browser-sync')
module.exports = pugToHtml = () => {
  return app.gulp
    .src('src/*.pug')
    .pipe(pug())
    .pipe(app.gulp.dest('./dist/'))
    .pipe(browserSync.reload({ stream: true }))
}
