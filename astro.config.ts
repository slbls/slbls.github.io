import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://berenson.dev",
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
	],
});
