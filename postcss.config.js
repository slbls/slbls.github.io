module.exports = {
	plugins: [
		require("postcss-easy-import")({ prefix: "_" }),
		require("postcss-calc"),
		require("postcss-custom-properties")(),
		require("postcss-nesting"),
		require("autoprefixer")({ grid: "autoplace" }),
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
