module.exports = {
	plugins: [
		require("postcss-easy-import"),
		require("tailwindcss"),
		require("postcss-calc"),
		require("autoprefixer"),
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
