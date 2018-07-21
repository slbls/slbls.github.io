const path = require("path"),
	CleanPlugin = require("clean-webpack-plugin"),
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	HtmlPlugin = require("html-webpack-plugin"),
	ScriptExtHtmlPlugin = require("script-ext-html-webpack-plugin"),
	FaviconsPlugin = require("favicons-webpack-plugin"),
	CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: {
		"scripts/app": "./src/scripts/app.js"
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].js"
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
		new ExtractTextPlugin("styles/theme.css"),
		new HtmlPlugin({ template: "src/index.html" }),
		new ScriptExtHtmlPlugin({ defaultAttribute: "defer" }),
		new FaviconsPlugin({
			logo: "./src/favicon.png",
			prefix: "icons/",
			inject: true,
			background: "#f5f5f5"
		}),
		new CopyPlugin([
			{ from: "_redirects", to: "_redirects", toType: "file" }
		])
	]
};
