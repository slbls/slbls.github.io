const path = require("path"),
	{ CleanWebpackPlugin } = require("clean-webpack-plugin"),
	HtmlPlugin = require("html-webpack-plugin"),
	MiniCssExtractPlugin = require("mini-css-extract-plugin"),
	FaviconsPlugin = require("favicons-webpack-plugin"),
	ImageminPlugin = require("imagemin-webpack-plugin").default;

module.exports = (_env, options) => {
	const isProduction = options.mode.toLowerCase() === "production";

	return {
		devtool: isProduction ? "source-map" : "inline-source-map",
		entry: path.resolve("src/index.ts"),
		output: {
			path: path.resolve("dist"),
			filename: isProduction
				? "js/bundle.[contenthash].js"
				: "js/bundle.js"
		},
		resolve: {
			extensions: [".ts", ".js"]
		},
		module: {
			rules: [
				{
					test: /.pug$/,
					use: ["html-loader", "pug-plain-loader"]
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
					test: /\.css$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								...(!isProduction && {
									publicPath: "../"
								})
							}
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
					? "css/bundle.[contenthash].css"
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
			new FaviconsPlugin({
				logo: "./src/media/favicon.jpg",
				mode: "auto",
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
						coast: true,
						favicons: true,
						firefox: true,
						windows: true,
						yandex: true
					}
				}
			}),
			...(isProduction
				? [new CleanWebpackPlugin(), new ImageminPlugin()]
				: [])
		]
	};
};
