const path = require("path"),
	CleanPlugin = require("clean-webpack-plugin"),
	HtmlPlugin = require("html-webpack-plugin"),
	HtmlExcludeAssetsPlugin = require("html-webpack-exclude-assets-plugin"),
	MiniCssExtractPlugin = require("mini-css-extract-plugin"),
	WebappPlugin = require("webapp-webpack-plugin"),
	ExtraneousFileCleanupPlugin = require("webpack-extraneous-file-cleanup-plugin"),
	CopyPlugin = require("copy-webpack-plugin");

module.exports = (_env, options) => {
	const isProduction = options.mode.toLowerCase() === "production";

	return {
		devtool: isProduction ? "source-map" : "inline-source-map",
		entry: path.resolve("src/index.scss"),
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
						"css-loader",
						"postcss-loader",
						"sass-loader"
					]
				}
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: "css/bundle.[hash].css"
			}),
			new HtmlPlugin({
				template: "src/index.pug",
				...(isProduction && { excludeAssets: [/main\.(map.)*js/] })
			}),
			new WebappPlugin({
				logo: "./src/media/favicon.png",
				prefix: "media/",
				inject: true,
				favicons: {
					background: "#fafafa",
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
						new CleanPlugin("dist"),
						new CopyPlugin([
							{
								from: "_redirects",
								to: "_redirects",
								toType: "file"
							}
						]),
						new HtmlExcludeAssetsPlugin(),
						new ExtraneousFileCleanupPlugin({
							extensions: [".js"]
						})
				  ]
				: [])
		]
	};
};
