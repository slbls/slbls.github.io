const path = require("path"),
	{ CleanWebpackPlugin } = require("clean-webpack-plugin"),
	HtmlPlugin = require("html-webpack-plugin"),
	ScriptExtHtmlPlugin = require("script-ext-html-webpack-plugin"),
	MiniCssExtractPlugin = require("mini-css-extract-plugin"),
	WebappPlugin = require("webapp-webpack-plugin"),
	CopyPlugin = require("copy-webpack-plugin"),
	ImageminPlugin = require("imagemin-webpack-plugin").default;

module.exports = (_env, options) => {
	const isProduction = options.mode.toLowerCase() === "production";

	return {
		devtool: isProduction ? "source-map" : "inline-source-map",
		entry: path.resolve("src/index.ts"),
		output: {
			path: path.resolve("dist"),
			filename: isProduction ? "js/bundle.[hash].js" : "js/bundle.js"
		},
		resolve: {
			extensions: [".ts", ".js"]
		},
		module: {
			rules: [
				{
					test: /.pug$/,
					use: ["html-loader", "pug-html-loader"]
				},
				{
					test: /\.(jpg|jpeg|png|ico|svg)$/,
					use: [
						{
							loader: "file-loader",
							options: {
								name: "[name].[ext]",
								outputPath: "media/",
								esModule: false
							}
						}
					]
				},
				{
					test: /.css$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: { hmr: !isProduction }
						},
						"css-loader",
						"postcss-loader"
					]
				},
				{
					test: /\.ts$/,
					exclude: /node_modules/,
					use: "ts-loader"
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
				logo: "./src/media/favicon.jpg",
				prefix: "media/",
				inject: true,
				favicons: {
					background: "#121212",
					theme_color: "#06c",
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
						new CleanWebpackPlugin(),
						new CopyPlugin([
							{
								from: "_redirects",
								to: "_redirects",
								toType: "file"
							}
						]),
						new ImageminPlugin()
				  ]
				: [])
		]
	};
};
