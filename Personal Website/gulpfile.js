const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');

function minifyCSS() {
    return gulp.src('Website/styles/*.css')
        .pipe(cleanCSS())
        .pipe(concat('site.min.css'))
        .pipe(gulp.dest('Website/minified'));
}

gulp.task('minify-css', minifyCSS);

gulp.task('watch', () => {
    gulp.watch('Website/styles/*.css', minifyCSS);
});

gulp.task('default', gulp.series('minify-css', 'watch'));