const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const babel = require("gulp-babel");

gulp.task('sass', function () {
  console.log('FIRE')
  return gulp.src('./stylesheet/**/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({
      stream:true
    }))
})

gulp.task('watch', ['browser-sync', 'sass', 'babel'], function () {
  gulp.watch('./stylesheet/**/*.sass', ['sass'])
})

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
})

gulp.task('babel', function() {
    return gulp.src("src/app.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
})