var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  cssmin = require('gulp-cssmin'),
  rename = require('gulp-rename'),
  inject = require('gulp-inject'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload,
  gutil = require('gulp-util'),

  paths = {
    html: ['app/index.html'],
    css: ['app/css/style.css'],
    js: ['app/js/script.js'],
  };

gulp.task('html', function () {
  gulp.src(paths.html)
    .pipe(reload({ stream: true }));
});

gulp.task('css', function () {
  gulp.src(paths.css)
    .pipe(reload({ stream: true }))
});

gulp.task('js', function () {
  gulp.src(paths.js)
    .pipe(reload({ stream: true }))
});

gulp.task('js_min', function () {
  gulp.src(paths.js)
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/js/'));
});

gulp.task('css_min', function () {
  gulp.src(paths.css)
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/css/'))
});

gulp.task('transfer', function () {
  gulp.src(paths.html)
    .pipe(gulp.dest('build'))
});

gulp.task('watcher', function () {
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.js, ['js']);
  gulp.watch(paths.css, ['css']);
});

gulp.task('build', ['js_min', 'css_min', 'transfer']);
gulp.task('dev', ['build', 'watcher', 'browserSync']);

gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: "./build"
    },
    port: 8080,
    host: 'localhost',
    open: true,
    notify: false
  });
});