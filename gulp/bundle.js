const gulp = require('gulp');
const clean = require('gulp-handlebars-clean');
import runSequence from 'run-sequence';

/**
 * Puts together all assets and templates
 * in the same folder structure like on the server
 */

const bundleTemplatesTask = () => {
	return gulp.src('./app/**/*.hbs')
		.pipe(
			clean()
		)
		.pipe(
			gulp.dest('./dist/templates/')
		);
};

gulp.task('bundleTemplates', bundleTemplatesTask);

const bundleAssetsTask = () => {
	return gulp.src(['./dist/**', '!./dist/*.{html,hbs}'])
		.pipe(
			gulp.dest('./dist/webroot')
		);
};

gulp.task('bundleAssets', bundleAssetsTask);

module.exports = bundleAssetsTask;

gulp.task('bundle', callback => {
	runSequence('build',
		['bundleTemplates', 'bundleAssets'],
		callback
	);
});
