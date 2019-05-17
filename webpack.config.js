const path = require("path"),
	CleanPlugin = require("clean-webpack-plugin"),
	HtmlPlugin = require("html-webpack-plugin"),
	ScriptExtHtmlPlugin = require("script-ext-html-webpack-plugin"),
	MiniCssExtractPlugin = require("mini-css-extract-plugin"),
	WebappPlugin = require("webapp-webpack-plugin"),
	CopyPlugin = require("copy-webpack-plugin");

module.exports = (_env, options) => {
	const isProduction = options.mode.toLowerCase() === "production";

	return {
		devtool: isProduction ? "source-map" : "inline-source-map",
		entry: path.resolve("src/index.js"),
		output: {
			path: path.resolve("dist"),
			filename: isProduction ? "js/bundle.[hash].js" : "js/bundle.js"
		},
		module: {
			rules: [
				{
					test: /.pug$/,
					use: [
						{
							loader: "html-loader",
							options: {
								attrs: [":src"]
							}
						},
						"pug-html-loader"
					]
				},
				{
					test: /.(sc|c|sa)ss$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: { hmr: !isProduction }
						},
						"css-loader",
						"postcss-loader",
						{
							loader: "sass-loader",
							options: {
								implementation: require("sass")
							}
						}
					]
				},
				{
					test: /\.js?$/,
					exclude: /node_modules/,
					use: "babel-loader"
				}
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: isProduction
					? "css/bundle.[hash].css"
					: "css/bundle.css"
			}),
			new HtmlPlugin({
				template: "src/index.pug",
				...(isProduction && {
					filename: "index.html",
					minify: {
						collapseBooleanAttributes: true,
						removeEmptyAttributes: true,
						removeScriptTypeAttributes: true,
						removeStyleLinkTypeAttributes: true,
						useShortDoctype: true,
						sortAttributes: true,
						sortClassName: true
					}
				})
			}),
			new ScriptExtHtmlPlugin({
				defaultAttribute: "defer"
			}),
			new WebappPlugin({
				logo: "./src/media/favicon.png",
				prefix: "media/",
				inject: true,
				favicons: {
					background: "#111111",
					theme_color: "#111111",
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
			...(isProduction
				? [
						new CleanPlugin(),
						new CopyPlugin([
							{
								from: "_redirects",
								to: "_redirects",
								toType: "file"
							}
						])
				  ]
				: [])
		]
	};
};
