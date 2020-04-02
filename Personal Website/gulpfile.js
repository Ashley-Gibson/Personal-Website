//https://gulpjs.com/docs/en/getting-started/working-with-files

let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('minify-css', () => {
    return gulp.src('./Website/styles/*.css')
        .pipe(cleanCSS())
        .pipe(concat('site.min.css'))
        .pipe(gulp.dest('./Website/styles'));
});

gulp.task('styles', function () {
    gulp.watch('./Website/styles/*.css', function (evt) {
        gulp.task('minify-css');
    });
});