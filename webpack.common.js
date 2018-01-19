const path = require("path"),
CleanWebpackPlugin = require("clean-webpack-plugin"),
HtmlWebpackPlugin = require("html-webpack-plugin"),
ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/scripts/app"
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "scripts/[name].bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			},
			{
				test: /\.(jpg|jpeg|png|ico|svg)$/,
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
				test: /\.(eot|woff|woff2)$/,
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
							options: { minimize: "true" }
						},
						{
							loader: "postcss-loader"
						},
						{
							loader: "sass-loader"
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
							plugins: [
								"transform-runtime",
								"transform-class-properties"
							]
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
		})
	]
};