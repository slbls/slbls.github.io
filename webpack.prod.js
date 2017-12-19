const webpack = require("webpack"),
merge = require("webpack-merge"),
common = require("./webpack.common.js"),
MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = merge(common, {
	devtool: "source-map",
	plugins: [
		new MinifyPlugin({}, 
		{
			comments: false
		})
	]
});