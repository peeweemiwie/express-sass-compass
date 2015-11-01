var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat');

var jsSources = [
  'components/scripts/script.js'
];


gulp.task('js', function(){
  gutil.log('hello world!');
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(gulp.dest('builds/development/js'))
});