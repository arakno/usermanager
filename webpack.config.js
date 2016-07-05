var path = require('path');

const PATHS = {
  app: path.join(__dirname, 'src/js'),
  style: path.join(__dirname, 'src/css'),
  build: path.join(__dirname, 'build'),
  test: path.join(__dirname, 'test')
};

const includePaths = [
  path.join(__dirname, 'test'),
  path.join(__dirname, 'src')
  ];

var config = {
	entry: "./src/js/index",
	resolve: {
		modulesDirectories: ['node_modules', 'src/js'],//directories to look for when resolving ./ paths
		extensions: ['', '.js', '.jsx']
	},
	output: {
		publicPath: "./",
		filename: "./bundle.js"
	},
	module: {
        loaders: [
		{
            test: /\.jsx?$/,
			include: includePaths,
            exclude: /(node_modules|bower_components)/,
            loader: ['babel'],
			query: {
				cacheDirectory: true,
                presets: ['es2015']
			}
        },
		{ test: /\.css$/, loader: "style!css" },
		{ test: /\.less$/, loader: "style!css!less" },
		{
			test: /\.(jpe?g|png|gif|svg)$/i,
			loaders: [
				'url?limit=8192',
				'img'
			]
		},
		{ test: /\.json$/, loader: 'json', includePaths}
		]
    },
	
    devtool: 'eval',

	devServer: {
		inline:true,

		quiet: false,
		noInfo: false,
		stats: {
			// Config for minimal console.log mess.
			assets: false,
			colors: true,
			version: false,
			hash: false,
			timings: false,
			chunks: false,
			chunkModules: false
		},
		
		port: process.env.PORT || 3000,
    }
};

module.exports = config;