const gulp = require('gulp');
const filelist = require('gulp-filelist-json');

const filelistTask = () => {
	return gulp.src(['./dist/**/*.html', '!./dist/tmp-*', '!./dist/images/**'])
		.pipe(filelist({
			compact: false,
			filename: 'pages.json',
			verbose: false
		}))
		.pipe(gulp.dest('./reports'));
};

gulp.task('filelist', filelistTask);

module.exports = filelistTask;
