import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type HeaderProps = {
	readonly children: ReactNode;
};

export const Header = ({ children }: HeaderProps) => (
	<Box as="header" maxWidth="xl">
		{children}
	</Box>
);
