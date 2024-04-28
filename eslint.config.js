import eslint from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

export default tseslint.config(
	eslint.configs.recommended,
	// Ideally, `strictTypeChecked` could be used, but `eslint-plugin-astro`
	// doesn't support it. See:
	// https://github.com/ota-meshi/eslint-plugin-astro/issues/240
	...tseslint.configs.strict,
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
	...eslintPluginAstro.configs["flat/recommended"],
	...eslintPluginAstro.configs["flat/jsx-a11y-strict"],
);
