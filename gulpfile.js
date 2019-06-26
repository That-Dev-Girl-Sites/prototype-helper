/**
 * Build tasks.
 */

const gulp      = require( 'gulp' );
const sass      = require( 'gulp-sass' );
const minifyCSS = require( 'gulp-minify-css' );

gulp.task( 'default', function() {
  return gulp.src( 'source/sass/styles.scss' )
    .pipe( sass().on( 'error', sass.logError ) )
    .pipe( minifyCSS() )
    .pipe( gulp.dest( 'build' ) );
});
