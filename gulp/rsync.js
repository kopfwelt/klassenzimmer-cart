const gulp = require('gulp');
const gutil = require('gulp-util');
const ftp = require('vinyl-ftp');

const rsyncTask = () => {
	const conn = ftp.create({
		host: 'ftp.bytecamp.net',
		user: process.env.GB_USERNAME,
		password: process.env.GB_PASSWORD,
		parallel: 5,
		log: gutil.log
	});

	// using base = '.' will transfer everything to /public_html correctly
	// turn off buffering in gulp.src for best performance

	return gulp.src('./dist/**', {
		base: './dist',
		buffer: false
	})
		// .pipe(conn.newer('/')) // only upload newer files
		.pipe(conn.dest('/'));
};

gulp.task('rsync', rsyncTask);

module.exports = rsyncTask;
