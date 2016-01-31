// Handlebars templates

const gulp = require('gulp');
const hb = require('gulp-hb');
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const browserSync = require('./serve');

// Enable handlebars-layouts
// const layouts = require('handlebars-layouts');
// hb.handlebars.registerHelper(layouts(hb.handlebars));

gulp.task('handlebars', () => {
	return gulp.src(['app/*.hbs', 'app/styleguide/*.hbs'], {base: 'app'})
		.pipe(hb({
			data: 'app/templates/data/**/*.{js,json}',
			helpers: 'app/templates/helpers/*.js',
			partials: [
				'app/templates/*.hbs',
				'app/components/**/*.hbs',
				'app/components/jobs/templates/*.hbs'
			],
			// debug: true,
			bustCache: true
		}))
		.on('error', notify.onError(error => `Handlebars error: ${error}`))
		// rename to .hbs
		.pipe(rename(path => {
			path.extname = '.html';
		}))
		.pipe(gulp.dest('.tmp'))
		.pipe(browserSync.stream());
});
