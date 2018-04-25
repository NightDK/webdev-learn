var gulp = require('gulp'),
uglify = require('gulp-uglify'),
cssmin = require('gulp-cssmin'),
rename = require('gulp-rename'),
inject = require('gulp-inject'),
gulpSequence = require('gulp-sequence'),
browserSync = require('browser-sync').create(),
gutil  = require('gulp-util');

gulp.task('minify-js', function () {
gulp.src('app/js/check_for_error.js')
.pipe(uglify())
.pipe(rename({suffix: '.min'}))
.on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
.pipe(gulp.dest('build/js'))
});

gulp.task('minify-css', function () {
gulp.src('app/css/style.css')
.pipe(cssmin())
.pipe(rename({suffix: '.min'}))
.on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
.pipe(gulp.dest('build/css'))
});

gulp.task('html-build', function () {
gulp.src('app/*.html')
.pipe(gulp.dest('build/'))
.on('end', function () {
gulp.src('build/index.html')
.pipe(inject(gulp.src('./build/js/check_for_error.min.js', {read: false}), {relative: true}))
.pipe(inject(gulp.src('./build/css/index.min.css', {read: false}), {relative: true}))
.pipe(gulp.dest('build/'));
})
});

gulp.task('dev', function () {
browserSync.init({
server: {
  baseDir: "./build"
}
});
gulp.watch("./build/*").on('change', browserSync.reload);
});

gulp.task('build', function () {
function update () {
gulpSequence(
  "minify-js",
  "minify-css",
  "html-build",
  function () {
    gulp.src('app/css/style.css').pipe(gulp.dest('build/css'));
    gulp.src('app/js/jquery-3.2.1.min.js').pipe(gulp.dest('build/js'));
    gulp.src('app/js/check_for_error.js').pipe(gulp.dest('build/js'));
    browserSync.reload
  }
)
}
browserSync.init({
server: {
  baseDir: "./build"
}
});
update ();
gulp.watch("./app/*").on('change', update);
});