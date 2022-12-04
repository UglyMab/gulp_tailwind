const babel = require('gulp-babel')
const browserSync = require('browser-sync')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')

module.exports = babelTask = () => {
  return app.gulp
    .src('src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(concat('script.min.js'))
    .pipe(uglify())

    .pipe(sourcemaps.write('/sourcemap'))
    .pipe(app.gulp.dest('./dist/assets/js'))
    .pipe(browserSync.stream())
}
