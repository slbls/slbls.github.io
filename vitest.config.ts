/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import path from "path";
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
		globals: true,
		setupFiles: "vitest.setup.ts",
		environment: "jsdom",
	},
});
