const gulp = require('gulp');
const critical = require('critical').stream;

// Generate & inline critical-path CSS
gulp.task('critical', () => {
	return gulp.src('dist/*.html')
		.pipe(critical({
			base: 'dist/',
			// Generate HTML, not CSS.
			inline: true,
			minify: true,
			// Explicitly define our CSS so it doesn't take all stylesheets
			// automatically from the HTML files.
			// css: 'dist/styles/main.css',
			// Don't inline fonts and urls.
			ignore: ['@font-face', /url\(/]
		}))
		.pipe(gulp.dest('dist'));
});
