const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const BABEL_POLYFILL = './node_modules/babel-polyfill/browser.js';
const CLIENT_BABEL_OPTS = {
    presets: ["@babel/env"]
};

// Minify all CSS in styles folder
function minifyCSS() {
    return gulp.src('Website/styles/**/*.scss')
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(concat('site.min.css'))
        .pipe(gulp.dest('Website/minified'));
}

gulp.task('minify-scss', minifyCSS);

// Minify all js in js folder
function minifyJS() {
    return gulp.src(BABEL_POLYFILL),
            gulp.src('Website/js/**/*.js')
            .pipe(babel(CLIENT_BABEL_OPTS))
            .pipe(uglify())
            .pipe(concat('site.min.js'))
            .pipe(gulp.dest('Website/minified'));
}

gulp.task('minify-js', minifyJS);

gulp.task('watch', () => {
    gulp.watch('Website/styles/**/*.css', minifyCSS);
    gulp.watch('Website/js/**/*.js', minifyJS);
});

gulp.task('default', gulp.series('minify-scss', 'minify-js', 'watch'));