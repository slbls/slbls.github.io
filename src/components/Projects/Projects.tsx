import { Box, UnorderedList } from "@chakra-ui/react";
import { ReactNode } from "react";

type ProjectsProps = {
	readonly children: ReactNode;
};

export const Projects = ({ children }: ProjectsProps) => (
	<Box
		as="section"
		position="relative"
		_before={{
			content: `""`,
			position: "absolute",
			zIndex: -1,
			display: "inline-block",
			width: "100vw",
			height: "full",
			left: "50%",
			right: "50%",
			marginLeft: "-50vw",
			marginRight: "-50vw",
			backgroundColor: "gray.900"
		}}
	>
		<UnorderedList
			paddingY={{ base: 10, lg: 12 }}
			marginLeft={0}
			styleType="none"
			experimental_spaceY={6}
		>
			{children}
		</UnorderedList>
	</Box>
);
