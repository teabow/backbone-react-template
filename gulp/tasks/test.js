/**
 * Init vars
 */
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: false});
var karma = require('gulp-karma');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var appDir = 'app', testDir = 'test';

gulp.task('jsHint', function() {
    return gulp.src(appDir + '/scripts')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});
