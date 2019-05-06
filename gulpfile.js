var gulp = require('gulp');
var concat = require('gulp-concat')
var uglify = require('gulp-uglify');

gulp.task('compilejs', function() {
    // combine all JS files
    return gulp.src(['./js/*.js', '!js/mf.js'])
    .pipe(concat('plugins.js'))
    .pipe(uglify('plugins.js'))
    .pipe(gulp.dest('./scripts/'));
}
         );


gulp.task('watch', function() {
    // watch all JS files
    gulp.watch(['./scripts/*.js'], gulp.series('compilejs'));
});

gulp.task('default', gulp.parallel('compilejs', 'watch'));
