import {
	extendTheme,
	type ThemeOverride,
	withDefaultColorScheme,
} from "@chakra-ui/react";

import { colors } from "./foundations/colors";

const overrides = {
	config: {
		initialColorMode: "system",
		useSystemColorMode: true,
	},
	colors,
} satisfies ThemeOverride;

export const theme = extendTheme(
	overrides,
	withDefaultColorScheme({ colorScheme: "brand" })
) as ThemeOverride & typeof overrides;
