const path = require("path"),
	CleanPlugin = require("clean-webpack-plugin"),
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	HtmlPlugin = require("html-webpack-plugin"),
	ScriptExtHtmlPlugin = require("script-ext-html-webpack-plugin"),
	WebappPlugin = require("webapp-webpack-plugin"),
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
