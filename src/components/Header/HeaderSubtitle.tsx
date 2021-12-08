import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

type HeaderSubtitleProps = {
	readonly children: ReactNode;
};

export const HeaderSubtitle = ({ children }: HeaderSubtitleProps) => (
	<Heading
		fontSize={{ base: "3xl", lg: "4xl" }}
		fontWeight="bold"
		color="gray.900"
	>
		{children}
	</Heading>
);
