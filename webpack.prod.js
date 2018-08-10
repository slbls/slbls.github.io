const webpack = require("webpack"),
	merge = require("webpack-merge"),
	commonConfiguration = require("./webpack.common"),
	MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(commonConfiguration, {
	mode: "production",
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader"
				]
			}
		]
	}
});
