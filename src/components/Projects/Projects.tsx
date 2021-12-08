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
			left: "50%",
			right: "50%",
			display: "inline-block",
			width: "100vw",
			height: "full",
			marginLeft: "-50vw",
			marginRight: "-50vw",
			bgGradient: "linear(to-br, gray.900, gray.700)"
		}}
	>
		<UnorderedList
			position="relative"
			zIndex={1}
			paddingY={{ base: 10, lg: 12 }}
			marginLeft={0}
			styleType="none"
			experimental_spaceY={6}
		>
			{children}
		</UnorderedList>
	</Box>
);
