var gulp = require('gulp');
var cssUserefAbs = require('gulp-css-useref-abs');

if (!process.env.NGN_ENV_FOLDER) throw new Error('NGN_ENV_FOLDER not defined');

module.exports = gulp.task('ngn-copy-css-refs', function() {
  return gulp.src('build/public/m/css/*.css')
    .pipe(cssUserefAbs({
      absSources: {
        'i': process.env.NGN_ENV_FOLDER + '/ngn'
      }
    }))
    .pipe(gulp.dest('build/public'));
});