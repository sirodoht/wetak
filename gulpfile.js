var gulp = require('gulp');
var server = require('gulp-express');

gulp.task('serve', function() {
  server.run(['app.js']);
});

gulp.task('default', ['serve']);
