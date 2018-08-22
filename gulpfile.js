const gulp = require('gulp');
const stylelint = require('gulp-stylelint');
const eslint = require('gulp-eslint');
const mochaPhantomJS = require('gulp-mocha-phantomjs');

gulp.task('lint-css', () => {
 
  return gulp
    .src('./style.css')
    .pipe(stylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
});

gulp.task('lint-js', () => {
  return gulp
    .src('./script.js')
    // eslint() attaches the lint output to the "eslint" property 
    // of the file object so it can be used by other modules. 
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console. 
    // Alternatively use eslint.formatEach() (see Docs). 
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on 
    // lint error, return the stream and pipe to failAfterError last. 
    .pipe(eslint.failAfterError());
});

gulp.task('test', () => {
  return gulp
    .src('test/run.html')
    .pipe(mochaPhantomJS());
});