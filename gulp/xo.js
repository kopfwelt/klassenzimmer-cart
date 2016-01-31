const gulp = require('gulp');
const shell = require('gulp-shell');

const xoTask = callback => {
	shell.task(['xo'], {
		verbose: true
	});
	callback();
};

// Lints our scripts with XO as defined in `package.json`.
gulp.task('xo', xoTask);

module.exports = xoTask;
