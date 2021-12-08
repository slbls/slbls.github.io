import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type ScreenContainerProps = {
	readonly children: ReactNode;
};

export const ScreenContainer = ({ children }: ScreenContainerProps) => (
	<Box minHeight="100vh" bgGradient="linear(to-br, white, gray.100)">
		{children}
	</Box>
);
