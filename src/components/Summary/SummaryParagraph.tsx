import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type SummaryParagraphProps = {
	readonly children: ReactNode;
};

export const SummaryParagraph = ({ children }: SummaryParagraphProps) => (
	<Text as="p" maxWidth="2xl" color="gray.800">
		{children}
	</Text>
);
