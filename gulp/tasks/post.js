const postcss = require('gulp-postcss')
const browserSync = require('browser-sync')

module.exports = postCss = () => {
  return app.gulp
    .src('./src/css/*.css')
    .pipe(postcss())
    .pipe(app.gulp.dest('./dist/assets/css'))
    .pipe(browserSync.reload({ stream: true }))
}
