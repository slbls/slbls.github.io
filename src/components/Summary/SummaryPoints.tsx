import { Box, UnorderedList } from "@chakra-ui/react";
import { ReactNode } from "react";

type SummaryPointsProps = {
	readonly position?: "left" | "right";
	readonly children: ReactNode;
};

export const SummaryPoints = ({
	position = "right",
	children
}: SummaryPointsProps) => (
	<Box as="aside" float={{ lg: position }}>
		<UnorderedList
			display="flex"
			flexDirection={{ lg: "column" }}
			marginLeft={0}
			styleType="none"
			experimental_spaceX={{ base: 12, lg: 0 }}
			experimental_spaceY={{ base: 0, lg: 6 }}
		>
			{children}
		</UnorderedList>
	</Box>
);
