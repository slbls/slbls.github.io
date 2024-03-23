import eslint from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.strictTypeChecked,
	eslintPluginPrettierRecommended,
	{
		languageOptions: {
			parserOptions: {
				project: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		plugins: {
			"simple-import-sort": simpleImportSort,
		},
		rules: {
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
		},
	},
	{
		files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
		extends: [tseslint.configs.disableTypeChecked],
	},
	...eslintPluginAstro.configs["flat/recommended"],
	...eslintPluginAstro.configs["flat/jsx-a11y-recommended"],
);
