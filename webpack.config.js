const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/scripts/app"
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "scripts/[name].bundle.js"
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
						options: {
							minimize: true,
							conservativeCollapse: false
						}
					}
				]
			},
			{
				test: /\.(jpg|jpeg|png|ico)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "images/"
						}
					}
				]
			},
			{
				test: /\.(otf|ttf)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "fonts/"
						}
					}
				]
			},
			{
				test: /\.s[ac]ss$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: "css-loader",
							options: {
								minimize: true,
								sourceMap: true
							}
						},
						{
							loader: "sass-loader",
							options: {
								sourceMap: true
							}
						}
					],
					fallback: "style-loader",
					publicPath: "../"
				})
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["env"],
							plugins: ["transform-runtime", "transform-class-properties"],
							sourceMaps: true
						}
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin("dist"),
		new ExtractTextPlugin("styles/[name].bundle.css"),
		new HtmlWebpackPlugin({
			template: "src/index.html"
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true
		})
	]
};