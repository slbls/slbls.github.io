const path = require("path"),
	CleanPlugin = require("clean-webpack-plugin"),
	HtmlPlugin = require("html-webpack-plugin"),
	ScriptExtHtmlPlugin = require("script-ext-html-webpack-plugin"),
	MiniCssExtractPlugin = require("mini-css-extract-plugin"),
	WebappPlugin = require("webapp-webpack-plugin"),
	CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: [path.resolve("src/scripts/index.js")],
	output: {
		path: path.resolve("dist"),
		filename: "static/js/bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.pug$/,
				use: [
					{
						loader: "html-loader",
						options: {
							minimize: true
						}
					},
					"pug-html-loader"
				]
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					"style-loader",
					"css-loader",
					"postcss-loader",
					"sass-loader"
				]
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
		new MiniCssExtractPlugin({
			filename: "static/css/bundle.css"
		}),
		new HtmlPlugin({ template: "src/pug/index.pug" }),
		new ScriptExtHtmlPlugin({ defaultAttribute: "defer" }),
		new WebappPlugin({
			logo: "./src/favicon.png",
			prefix: "icons/",
			inject: true,
			favicons: {
				background: "#f5f5f5",
				theme_color: "#333333",
				display: "browser",
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: false,
					coast: false,
					favicons: true,
					firefox: true,
					windows: true,
					yandex: true
				}
			}
		}),
		new CopyPlugin([
			{ from: "_redirects", to: "_redirects", toType: "file" }
		])
	]
};
