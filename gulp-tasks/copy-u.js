var gulp = require('gulp');

module.exports = gulp.task('copy-u', function() {
  gulp.src('u/**/*')
    .pipe(gulp.dest('build/public/u'));
});
