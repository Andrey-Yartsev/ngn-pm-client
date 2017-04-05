var gulp = require('gulp');
var ngnJs = require('gulp-ngn-js');
var ngnCss = require('gulp-ngn-css');

if (!process.env.NGN_ENV_FOLDER) throw new Error('NGN_ENV_FOLDER not defined');
if (!process.env.PROJECT_FOLDER) throw new Error('PROJECT_FOLDER not defined');

module.exports = gulp.task('ngn-build', function () {
  var opt = {
    ngnEnvFolder: process.env.NGN_ENV_FOLDER,
    buildFolder: process.env.PROJECT_FOLDER + '/build/public/m',
    projectFolder: process.env.PROJECT_FOLDER,
    name: 'main',
    jsonFieldsFolder: process.env.PROJECT_FOLDER + '/models'
  };
  var reportOptions = {
    err: true,
    stderr: true,
    stdout: false
  };
  gulp.src('index.html', {read: false})
    .pipe(ngnJs(opt))
    .pipe(ngnJs.reporter(reportOptions))
    .pipe(ngnCss(opt))
    .pipe(ngnCss.reporter(reportOptions));
});
