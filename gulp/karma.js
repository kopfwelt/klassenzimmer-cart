var gulp = require('gulp');
var Server = require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('karma', function (done) {
  new Server({
    configFile: 'test/unit/karma.conf.js',
    singleRun: true
  }, done).start();
});