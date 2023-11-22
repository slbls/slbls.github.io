/// <reference types="vitest" />

import path from "node:path";

import react from "@vitejs/plugin-react";
import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	test: {
		exclude: [...configDefaults.exclude, "**/e2e/**"],
		setupFiles: "vitest.setup.tsx",
		environment: "jsdom",
		passWithNoTests: true,
		mockReset: true,
	},
});
