import { AttentionText } from "@/components/AttentionText";
import { ListItem, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type SummaryPointProps = {
	readonly top: ReactNode;
	readonly center: ReactNode;
	readonly bottom: ReactNode;
};

export const SummaryPoint = ({ top, center, bottom }: SummaryPointProps) => (
	<ListItem>
		<Text as="small" color="gray.500">
			{top}
		</Text>

		<br />

		<AttentionText fontSize={{ base: "xl", lg: "2xl" }} color="gray.700">
			{center}
		</AttentionText>

		<br />

		<Text as="small" color="gray.500">
			{bottom}
		</Text>
	</ListItem>
);
