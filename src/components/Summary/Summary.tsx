import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type SummaryProps = {
	readonly children: ReactNode;
};

export const Summary = ({ children }: SummaryProps) => (
	<Box
		as="section"
		display={{ lg: "flow-root" }}
		marginTop={{ base: 10, lg: 12 }}
		experimental_spaceY={6}
	>
		{children}
	</Box>
);
