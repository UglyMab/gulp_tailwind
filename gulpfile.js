const gulp = require('gulp')

global.app = {
  gulp,
}

const copy = require('./gulp/tasks/copy.js')
const min = require('./gulp/tasks/imagemin.js')
const clean = require('./gulp/tasks/clean.js')
const sync = require('./gulp/tasks/sync.js')
const postCss = require('./gulp/tasks/post.js')
const pugToHtml = require('./gulp/tasks/pug.js')
const babelTask = require('./gulp/tasks/babel.js')

console.log(min)
function watcher() {
  gulp.watch('src/fonts', copy)
  gulp.watch('src/img', min)
  gulp.watch('src/**/*.pug', gulp.series(pugToHtml, postCss))
  gulp.watch('src/css/*.css', gulp.series(pugToHtml, postCss))
  gulp.watch('src/js/*.js', babelTask)
}

const dev = gulp.series(
  clean,
  copy,
  min,
  pugToHtml,
  postCss,
  babelTask,
  gulp.parallel(sync, watcher)
)

gulp.task('default', dev)
