module.exports = {
	plugins: [
		require("postcss-easy-import")({ prefix: "_" }),
		require("tailwindcss"),
		require("postcss-calc"),
		require("postcss-preset-env")({
			stage: 0,
			autoprefixer: { grid: "autoplace" }
		}),
		require("cssnano")({
			preset: [
				"default",
				{
					discardComments: {
						removeAll: true
					}
				}
			]
		})
	]
};
