var gulp = require('gulp');
var gulpProtractor = require('gulp-protractor');

gulp.task('update', gulpProtractor.webdriver_update);
gulp.task('webdriver', gulpProtractor.webdriver_standalone);
