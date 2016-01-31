
const gulp = require('gulp');
const webdriver = require('gulp-webdriver');
const path = require('path');

const webdriverIoTask = () => {
	// shell.task(['selenium-server']);
	return gulp.src('./test/functional/wdio.sauce.conf.js', {read: false})
	// return gulp.src('./test/functional/wdio.local.conf.js', {read: false})
		.pipe(webdriver({
			// for npm 3+
			wdioBin: path.join('./', 'node_modules', '.bin', 'wdio')
		}));
};

gulp.task('webdriverio', webdriverIoTask);

module.exports = webdriverIoTask;
