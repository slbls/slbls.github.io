const webpack = require("webpack"),
	merge = require("webpack-merge"),
	commonConfiguration = require("./webpack.common"),
	path = require("path"),
	globby = require("globby"),
	PurifyCssPlugin = require("purifycss-webpack");

module.exports = merge(commonConfiguration, {
	mode: "production",
	devtool: "source-map",
	plugins: [
		new PurifyCssPlugin({
			paths: globby.sync(path.join(__dirname, "src/pug/*.pug")),
			minimize: true,
			purifyOptions: {
				info: true,
				rejected: true
			}
		})
	]
});
