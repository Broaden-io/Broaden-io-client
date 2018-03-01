const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, "public", "javascripts"),
	entry: './src/index.js',
	output: {
    path: path.join(__dirname, "public", "javascripts"),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /.scss$/,
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style',
					loader: 'css!sass'
				})
			},
      {
        test: /\.jsx?$/,
        loader: "babel-loader"}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css')
	],
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ["", ".js", ".jsx"],
    root: [path.join(__dirname, "public", "javascripts")],
    modulesDirectories: ["node_modules"]
  },
	watch: true,
};
