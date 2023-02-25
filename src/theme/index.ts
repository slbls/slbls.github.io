import {
	extendTheme,
	type ThemeOverride,
	withDefaultColorScheme,
} from "@chakra-ui/react";

import { colors } from "./foundations/colors";
import { styles } from "./styles";

const overrides = {
	config: {
		initialColorMode: "system",
		useSystemColorMode: true,
	},
	colors,
	styles,
} satisfies ThemeOverride;

export const theme = extendTheme(
	overrides,
	withDefaultColorScheme({ colorScheme: "brand" })
) as ThemeOverride & typeof overrides;
