import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

type HeaderTitleProps = {
	readonly children: ReactNode;
};

export const HeaderTitle = ({ children }: HeaderTitleProps) => (
	<Heading
		as="h1"
		fontSize={{ base: "xl", lg: "2xl" }}
		fontWeight="semibold"
		color="gray.400"
	>
		{children}
	</Heading>
);
