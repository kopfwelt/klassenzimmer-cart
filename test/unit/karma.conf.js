// Karma configuration
// Generated on Tue Nov 17 2015 23:22:30 GMT+0100 (CET)
var karmaWebpack = require('karma-webpack');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../..',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon'],

    // plugins: [
    //     require('karma-webpack'),
    //     // 'karma-mocha',
    //     // 'karma-chai',
    //     // 'karma-sinon',
    //     'karma-firefox-launcher'
    // ],

    // list of files / patterns to load in the browser
    files: [
      'test/unit/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
        'npm_modules/**'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'app/**/*.js': ['webpack', 'sourcemap'],
        'test/unit/**/*.spec.js': ['webpack', 'sourcemap']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],//, 'coverage'


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // Firefox, ''
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity,

    // optionally, configure the reporter
    coverageReporter: {
        type: 'html',
        dir: 'reports/coverage/'
    },

    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      },
      // filename: function (file) {
      //   return file.originalPath.replace(/\.js$/, '.es5.js');
      // },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    },
    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader' }
        ]
      }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }

    // plugins: [
    //     require('karma-webpack')
    // ]

  })
}
