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
		plugins: [webpack, 'karma-mocha', 'karma-chai', 'karma-chrome-launcher', 'karma-coverage', 'karma-spec-reporter'],
		browsers: ['Chrome'],
		preprocessors: {
			'app/**/*.js': ['webpack'],
			'test/unit/**/*.spec.js': ['webpack']
		},
		reporters: ['spec', 'coverage'],
		coverageReporter: {
			dir: 'reports/coverage/',
			reporters: [
				{type: 'html', subdir: 'report-html'}
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
			module: {
				loaders: webpackConfig.loaders,
				devtool: 'inline-source-map',
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
