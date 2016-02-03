var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');

gulp.task('mainJsFiles', function() {
    return gulp.src(mainBowerFiles('**/*.js'))
        .pipe(gulp.dest('app/js'))
});

gulp.task('mainCssFiles', function() {
    return gulp.src(mainBowerFiles('**/*.css'))
        .pipe(gulp.dest('app/css'))
});

gulp.task('mainFiles', ['mainCssFiles', 'mainJsFiles']);
