const path = require("path"),
	CleanPlugin = require("clean-webpack-plugin"),
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	HtmlPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		"scripts/app": "./src/scripts/app.js"
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name]-[hash].js"
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: {
					loader: "html-loader",
					options: {
						minimize: true
					}
				}
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
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: "css-loader",
							options: { minimize: "true" }
						},
						"postcss-loader"
					],
					fallback: "style-loader"
				})
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader"
			}
		]
	},
	plugins: [
		new CleanPlugin("dist"),
		new ExtractTextPlugin("styles/theme-[contenthash].css"),
		new HtmlPlugin({
			template: "src/index.html"
		})
	]
};