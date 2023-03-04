import { VStack } from "@chakra-ui/react";
import type { ReactNode } from "react";

type ExternalLinksProps = {
	readonly children: ReactNode;
};

export const ExternalLinks = ({ children }: ExternalLinksProps) => (
	<VStack
		as="nav"
		align="flex-start"
		fontSize="sm"
		fontWeight="light"
		spacing={1}
	>
		{children}
	</VStack>
);
