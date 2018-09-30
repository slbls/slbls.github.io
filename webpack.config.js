const path = require("path"),
	CleanPlugin = require("clean-webpack-plugin"),
	HtmlPlugin = require("html-webpack-plugin"),
	ScriptExtHtmlPlugin = require("script-ext-html-webpack-plugin"),
	MiniCssExtractPlugin = require("mini-css-extract-plugin"),
	WebappPlugin = require("webapp-webpack-plugin"),
	CopyPlugin = require("copy-webpack-plugin");

module.exports = (_env, options) => {
	const isProduction = options.mode.toLowerCase() === "production",
		plugins = [
			new MiniCssExtractPlugin({
				filename: "css/bundle.[hash].css"
			}),
			new HtmlPlugin({
				template: "src/index.pug"
			}),
			new ScriptExtHtmlPlugin({
				defaultAttribute: "defer"
			}),
			new WebappPlugin({
				logo: "./src/media/favicon.png",
				prefix: "media/",
				inject: true,
				favicons: {
					background: "#121217",
					theme_color: "#121217",
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
			})
		];

	if (isProduction)
		plugins.push(
			new CleanPlugin("dist"),
			new CopyPlugin([
				{ from: "_redirects", to: "_redirects", toType: "file" }
			])
		);

	return {
		devtool: isProduction ? "source-map" : "inline-source-map",
		entry: path.resolve("src/index.js"),
		output: {
			path: path.resolve("dist"),
			filename: "js/bundle.[hash].js"
		},
		module: {
			rules: [
				{
					test: /.pug$/,
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
					test: /.(c|sc|sa)ss$/,
					use: [
						isProduction
							? MiniCssExtractPlugin.loader
							: "style-loader",
						{
							loader: "css-loader",
							options: { minimize: "true" }
						},
						"postcss-loader",
						"sass-loader"
					]
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: ["babel-loader"]
				}
			]
		},
		plugins: plugins
	};
};
