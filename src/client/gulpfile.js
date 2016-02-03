var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var clean = require('gulp-clean');

//CLEAN CLIENT LIB DEV FOLDERS
gulp.task('cleanJs', function () {
    return gulp.src('app/js', {read: false})
        .pipe(clean());
});

gulp.task('cleanCss', function () {
    return gulp.src('app/css', {read: false})
        .pipe(clean());
});

//COPY MAIN FILES TO CLIENT DEV FOLDERS

gulp.task('mainJsFiles', ['cleanJs'], function() {
    return gulp.src(mainBowerFiles('**/*.js'))
        .pipe(gulp.dest('app/js'));
});

gulp.task('mainCssFiles', ['cleanCss'], function() {
    return gulp.src(mainBowerFiles('**/*.css'))
        .pipe(gulp.dest('app/css'));
});

gulp.task('mainFiles', ['mainCssFiles', 'mainJsFiles']);

//CLEAN SERVER RESOURCES FOLDERS
gulp.task('cleanServerCssFiles', function() {
    return gulp.src('../main/resources/static/css', {read: false})
        .pipe(clean(({force: true})));
});
gulp.task('cleanServerJsFiles', function() {
    return gulp.src('../main/resources/static/js', {read: false})
        .pipe(clean(({force: true})));
});
gulp.task('cleanServerScriptFiles', function() {
    return gulp.src('../main/resources/static/scripts', {read: false})
        .pipe(clean(({force: true})));
});
gulp.task('cleanServerImgFiles', function() {
    return gulp.src('../main/resources/static/img', {read: false})
        .pipe(clean(({force: true})));
});
gulp.task('cleanHtmlFiles', function() {
    return gulp.src('../main/resources/templates', {read: false})
        .pipe(clean(({force: true})));
});

//COPY APPLICATION TO SERVER RESOURCES
gulp.task('copyCssFiles', ['mainCssFiles', 'cleanServerCssFiles'], function() {
    return gulp.src('app/css/**')
        .pipe(gulp.dest('../main/resources/static/css'));
});

gulp.task('copyJsFiles', ['mainJsFiles', 'cleanServerJsFiles'], function() {
    return gulp.src('app/js/**')
        .pipe(gulp.dest('../main/resources/static/js'));
});

gulp.task('copyScriptFiles', ['cleanServerScriptFiles'], function() {
    return gulp.src('app/scripts/**')
        .pipe(gulp.dest('../main/resources/static/scripts'));
});

gulp.task('copyImgFiles', ['cleanServerImgFiles'], function() {
    return gulp.src('app/img/**')
        .pipe(gulp.dest('../main/resources/static/img'));
});

gulp.task('copyHtmlFiles', ['cleanHtmlFiles'], function() {
    return gulp.src('app/*.html')
        .pipe(gulp.dest('../main/resources/templates'));
});

gulp.task('copyFiles', ['copyCssFiles', 'copyJsFiles', 'copyScriptFiles', 'copyImgFiles', 'copyHtmlFiles']);


