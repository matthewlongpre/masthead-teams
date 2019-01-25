var gulp = require('gulp');
var zip = require('gulp-zip');
var del = require('del');

gulp.task('clean', function() {
    return del([
        'microsoft-teams/deploy/**/*'
    ])
});

gulp.task('generate-manifest', function() {
    gulp.src(['microsoft-teams/manifest/**/*'])
        .pipe(zip('masthead-teams-app.zip'))
        .pipe(gulp.dest('microsoft-teams/deploy'));
});

gulp.task('default', ['clean', 'generate-manifest'], function() {
    console.log('Build completed. Output in manifest folder');
});