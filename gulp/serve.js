const gulp = require('gulp');
const browserSync = require('browser-sync').create();

/**
 * Development server
 */
gulp.task('serve:dev', cb => {
	browserSync.init({
		notify: false,
		server: {
			baseDir: ['.tmp', 'app']
		}
	});
	cb();
});

/**
 * Dist server (test your build)
 */
gulp.task('serve:dist', cb => {
	browserSync.init({
		notify: false,
		server: {
			baseDir: ['dist']
		}
	});
	cb();
});

gulp.task('watch', cb => {
	// Reload the server when these files change.
	gulp.watch([
		'app/images/**/*'
	]).on('change', browserSync.reload);

	// Run tasks (that might reload the server) when these files change.
	gulp.watch(['app/*.hbs', 'app/styleguide/*.hbs', 'app/templates/**/*.{hbs,js,json}', 'app/components/**/*.hbs'], ['handlebars']);
	gulp.watch(['app/styles/**/*.scss', 'app/components/**/*.scss'], ['styles']);
	gulp.watch(['app/scripts/**/*.js', 'app/components/**/*.js'], ['scripts']);
	gulp.watch('app/images/icons/*.{svg,png}', ['icons']);
	cb();
});

// Export our instance of browserSync to other tasks.
module.exports = browserSync;
