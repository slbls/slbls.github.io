const webpack = require("webpack"),
	merge = require("webpack-merge"),
	commonConfiguration = require("./webpack.common");

module.exports = merge(commonConfiguration, {
	mode: "development",
	devtool: "inline-source-map"
});
