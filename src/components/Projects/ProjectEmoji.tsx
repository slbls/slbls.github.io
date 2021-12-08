import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type ProjectEmojiProps = {
	readonly children: ReactNode;
};

export const ProjectEmoji = ({ children }: ProjectEmojiProps) => (
	<Text as="span" fontSize="6xl" sx={{ filter: "grayscale(0.5)" }}>
		{children}
	</Text>
);
