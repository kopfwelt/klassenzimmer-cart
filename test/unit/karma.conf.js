const webpack = require('karma-webpack');
const isparta = require('isparta');
const webpackConfig = require('../../webpack.config.js');
webpackConfig.entry = {};

module.exports = function (config) {
	config.set({
		basePath: '../..',
		frameworks: ['mocha', 'chai'],
		files: [
			'node_modules/babel-polyfill/dist/polyfill.js',
			'test/unit/**/*.spec.js'
		],
		plugins: [webpack, 'karma-mocha', 'karma-chai', 'karma-chrome-launcher', 'karma-phantomjs-launcher', 'karma-coverage', 'karma-spec-reporter', 'karma-sourcemap-loader'],
		browsers: ['PhantomJS'],
		preprocessors: {
			// 'app/**/*.js': ['sourcemap'],
			'test/unit/**/*.spec.js': ['webpack','sourcemap']
		},
		reporters: ['spec', 'coverage'],
		coverageReporter: {
			dir: 'reports/',
			reporters: [
				{type: 'html', subdir:'coverage'}
			],
			instrumenters: {isparta},
			instrumenter: {
				'app/**/*.js': 'isparta'
			},
			instrumenterOptions: {
				isparta: {
					babel: {presets: 'es2015'}
				}
			}
		},
		webpack: {
			devtool: 'inline-source-map',
			module: {
				loaders: webpackConfig.loaders,
				postLoaders: [
					{
						test: /\.js$/,
						exclude: /(node_modules|resources\/js\/vendor|test)/,
						loader: 'istanbul-instrumenter'
					}
				]
			}
		},
		webpackMiddleware: {
			noInfo: true
		}
	});
};
