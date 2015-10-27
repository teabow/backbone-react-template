/**
 * Init vars
 */
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: false});
var browserify = require('browserify');
var uglify = require('uglify-js');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var source = require('vinyl-source-stream');
var fs = require('fs');
var resolutions = require('browserify-resolutions');
var appDir = 'app', buildDir = 'build';


gulp.task('build_html', function () {
    gulp.src(appDir + '**/*.html', { base: appDir })
        .pipe(gulp.dest(buildDir));
});

gulp.task('build_sass', function () {
    gulp.src(appDir + '**/*.scss', { base: appDir })
        .pipe(sass())
        .pipe(cssmin())
        .pipe(gulp.dest(buildDir));
});

gulp.task('build_browserify', function () {
    return browserify({debug: false})
        .add('./' + appDir + '/src/index.js')
        .bundle(function (err, src) {
            if (err) throw err;
            var script;
            try {
                script = uglify.minify(src.toString('utf8'), {fromString: true}).code;
            } catch (e) {
                console.log('Minify error', e);
            }
            if (script) {
                fs.writeFileSync(buildDir + '/app.js', script, {encoding: 'utf8'});
            }
        });
});

gulp.task('clean', function () {
    deleteFolderRecursive(buildDir);
});

gulp.task('build', ['clean'], function () {
    gulp.start('build_html');
    gulp.start('build_sass');
    gulp.start('build_browserify');
});


var deleteFolderRecursive = function (path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file, index) {
            var curPath = path + '/' + file;
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            }
            else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};