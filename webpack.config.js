var path = require("path");

module.exports = {
	entry: [
		// Set up an ES6-ish environment
		'babel-polyfill',

		// Add your application's scripts below
		'./app/scripts/app.js'
	],
	output: {
		path: path.resolve(__dirname, 'build/js'),
		publicPath: '/js/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: 'build'
	},
	devtool: 'inline-source-map',
	loaders: [{
		loader: 'babel-loader',
		// Skip any files outside of your project's `src` directory
		include: [
			'./app'
		],
		// Only run `.js` and `.jsx` files through Babel
		test: /\.js$/,
		// Options to configure babel with
		query: {
			plugins: ['transform-runtime'],
			presets: ['es2015']
		}
	}]
};
