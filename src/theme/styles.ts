import { mode, type Styles } from "@chakra-ui/theme-tools";

export const styles = {
	global: (props) => ({
		body: {
			minHeight: "100dvh",
			bgGradient: mode(
				"linear(to-br, gray.200, gray.100)",
				"linear(to-br, gray.900, gray.800)",
			)(props),
			color: mode("gray.900", "gray.50")(props),
		},
	}),
} satisfies Styles;
