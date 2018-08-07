const webpack = require("webpack"),
	merge = require("webpack-merge"),
	commonConfiguration = require("./webpack.common");

module.exports = merge(commonConfiguration, {
	mode: "production",
	devtool: "source-map"
});
