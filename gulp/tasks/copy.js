module.exports = copy = () => {
  return app.gulp.src('src/fonts/**/*.*').pipe(app.gulp.dest('assets/fonts'))
}
