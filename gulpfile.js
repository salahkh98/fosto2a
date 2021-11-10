const gulp = require('gulp');
const themekit = require('@shopify/themekit');
var sass = require('gulp-sass')(require('sass'));


gulp.task('sass' , function() {
  return gulp.src('scss/global.scss')
  .pipe(sass())
  .pipe(gulp.dest('assets'))
});


gulp.task('sass' , function(){
  return gulp.src('scss/global')
  .pipe(sass())
  .pipe(clean( { compatibility: 'ie11' }))
  .pipe(gulp.dest('assets'))
});