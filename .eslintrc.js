const getExtends = ({ withPlaywright }) => [
	"eslint:recommended",
	"next/core-web-vitals",
	"plugin:@typescript-eslint/recommended",
	"plugin:@typescript-eslint/recommended-requiring-type-checking",
	"plugin:sonarjs/recommended",
	...(withPlaywright ? ["plugin:playwright/playwright-test"] : []),
	"plugin:prettier/recommended",
];

/** @type {import('eslint').Linter.Config} */
module.exports = {
	// Playwright rules cause errors when applied to Vitest files, so they are
	// only applied to Playwright files.
	extends: getExtends({ withPlaywright: false }),
	parser: "@typescript-eslint/parser",
	parserOptions: {
		tsConfigRootDir: __dirname,
		project: ["./tsconfig.json"],
	},
	plugins: [
		"@typescript-eslint",
		"sonarjs",
		"prefer-arrow",
		"simple-import-sort",
	],
	root: true,
	rules: {
		// TypeScript
		// https://github.com/typescript-eslint/typescript-eslint
		"@typescript-eslint/consistent-type-definitions": ["error", "type"],
		"@typescript-eslint/consistent-type-exports": [
			"error",
			{
				fixMixedExportsWithInlineTypeSpecifier: true,
			},
		],
		"@typescript-eslint/consistent-type-imports": [
			"error",
			{ fixStyle: "inline-type-imports" },
		],

		// Prefer Arrow
		// https://github.com/TristonJ/eslint-plugin-prefer-arrow
		"prefer-arrow/prefer-arrow-functions": [
			"error",
			{
				disallowPrototype: true,
				singleReturnOnly: false,
				classPropertiesAllowed: false,
			},
		],

		// Simple Import Sort
		// https://github.com/lydell/eslint-plugin-simple-import-sort
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",

		// Chakra UI
		// https://github.com/yukukotani/eslint-plugin-chakra-ui
		"chakra-ui/props-order": "error",
		"chakra-ui/props-shorthand": [
			"error",
			{
				noShorthand: true,
			},
		],
		"chakra-ui/require-specific-component": "error",
	},
	overrides: [
		{
			// Playwright rules cause errors when applied to Vitest files, so they are
			// only applied to Playwright files.
			files: ["e2e/**/*.spec.ts"],
			extends: getExtends({ withPlaywright: true }),
		},
	],
};
