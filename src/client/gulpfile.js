var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var clean = require('gulp-clean');

gulp.task('cleanJs', function () {
    return gulp.src('app/js', {read: false})
        .pipe(clean());
});

gulp.task('cleanCss', function () {
    return gulp.src('app/css', {read: false})
        .pipe(clean());
});

gulp.task('mainJsFiles', ['cleanJs'], function() {
    return gulp.src(mainBowerFiles('**/*.js'))
        .pipe(gulp.dest('app/js'))
});

gulp.task('mainCssFiles', ['cleanCss'], function() {
    return gulp.src(mainBowerFiles('**/*.css'))
        .pipe(gulp.dest('app/css'))
});

gulp.task('mainFiles', ['mainCssFiles', 'mainJsFiles']);


