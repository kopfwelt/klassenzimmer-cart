const gulp = require('gulp');
const w3cjs = require('gulp-w3cjs');

const w3cTask = () => {
	gulp.src([
		'./dist/**/*.html',
		'!./dist/tmp-*',
		'!./dist/images/**',
		'!./dist/forms.html',
		'!./dist/grid.html',
		'!./dist/icons.html',
		'!./dist/lazyload.html'])
		.pipe(w3cjs())
		.pipe(w3cjs.reporter());
};

gulp.task('w3c', w3cTask);

module.exports = w3cTask;
