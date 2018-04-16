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
				include: [path.resolve(__dirname, "src/images")],
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "images/"
						}
					},
					{
						loader: "image-webpack-loader",
						options: {
							bypassOnDebug: true
						}
					}
				]
			},
			{
				test: /\.(eot|woff|woff2|ttf|svg)$/,
				include: [path.resolve(__dirname, "src/fonts")],
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
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: "css-loader",
							options: { minimize: "true" }
						},
						"postcss-loader",
						"sass-loader"
					],
					fallback: "style-loader",
					publicPath: "../"
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
