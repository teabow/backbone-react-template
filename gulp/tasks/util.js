var gulp = require('gulp'),
    env = require('gulp-env');

gulp.task('set-env-dev', function () {
    env({
        file: ".env.dev.json",
        vars: {
            //any vars you want to overwrite
        }
    });
});

gulp.task('set-env-prod', function () {
    env({
        file: ".env.prod.json",
        vars: {
            //any vars you want to overwrite
        }
    });
});
