// @todo implement watchify
// https://github.com/Browsersync/recipes/tree/master/recipes/gulp.browserify

const gulp = require('gulp');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const babelify = require('babelify');
const browserifyCss = require('browserify-css');
const browserSync = require('./serve');
const browserifyShim = require('browserify-shim');
const notify = require('gulp-notify');
const es = require('event-stream');
const rename = require('gulp-rename');
// const hbsfy = require('hbsfy').configure({
// 	extensions: ['hbs']
// });

// const icon = require('../app/components/icon/template');
// Handlebars.registerPartial('icon', icon);

// const watchify = require('watchify');

const bundles = ['app/scripts/app.js', 'app/scripts/app-header.js', 'app/scripts/jobs.js'];

// Runs browserify with transforms on our scripts
gulp.task('browserify', () => {
	const tasks = bundles.map(script => {
		return browserify(script, {debug: true})
			.transform(babelify)
			// .transform(hbsfy)
			.transform(browserifyShim)
			.transform(browserifyCss, {global: true})
			.bundle()
			.on('error', notify.onError(error => `Browserify error: ${error}`))
			.pipe(source(script))
			.pipe(rename(path => {
				path.dirname = '/';
			}))
			.pipe(gulp.dest('.tmp/scripts'))
			.pipe(browserSync.stream({once: true}));
	});

	// create a merged stream
	return es.merge.apply(null, tasks);
});

// To use browserify-shim, add something like this to package.json
/*
"browserify-shim": {
  "slick-carousel": {
    "exports": null,
    "depends": "jquery:$"
 }
},
*/
