var gulp       = require('gulp');
var sass       = require('gulp-sass');
var minifyCSS  = require('gulp-minify-css');
var watch      = require('gulp-watch');

gulp.task('default', ['watch', 'build-css']);

gulp.task('watch', function() {
	gulp.watch('sass/**/*.scss', ['build-css']);
});

gulp.task('build-css', function() {
	return gulp.src('sass/styles.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(minifyCSS())
		.pipe(gulp.dest('css'));
});
