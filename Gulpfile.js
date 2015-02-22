var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');

var server = require('gulp-express');
var browserify = require('browserify');

gulp.task('serve', function() {
  server.run(['back/app.js']);
});

gulp.task('watch', function() {
  gulp.watch(['back/app.js'], ['serve']);
});

gulp.task('browserify', function() {
  return browserify({
    entries: ['./front/scripts/frontapp.js'],
    debug: true
    })
    .bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify error'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./front/static/js/'));
});

gulp.task('default', ['browserify', 'serve', 'watch']);
