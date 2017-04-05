var gulp = require('gulp');
var browserSync = require('browser-sync').create();

module.exports = gulp.task('dev', function () {
  browserSync.init({
    server: {
      baseDir: 'build/public',
      index: 'index.html'
    }
  });
  gulp.watch('index.html', ['copy-index']);
  gulp.watch('m/**/*', ['copy-m']);
  gulp.watch('u/**/*', ['copy-u']);
  gulp.watch([
    'src/js/**/*',
    process.env.NGN_ENV_FOLDER + '/ngn/i/js/ngn/**/*.js',
    process.env.NGN_ENV_FOLDER + '/ngn/i/css/**/*.css'
  ], ['ngn-build']);
  gulp.watch([
    'build/public/m/css/*.css',
    'build/public/m/js/*.js',
    'build/public/u/js/cache/form/*.js',
    'build/public/index.html'
  ]).on('change', function() {
    setTimeout(function () {
      browserSync.reload()
    }, 500)
  });

  gulp.watch([
    'models/*.json'
  ], ['ngn-build']);
});
