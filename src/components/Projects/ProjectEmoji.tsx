import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type ProjectEmojiProps = {
	readonly children: ReactNode;
};

export const ProjectEmoji = ({ children }: ProjectEmojiProps) => (
	<Text as="span" float="right" fontSize="xl">
		{children}
	</Text>
);
