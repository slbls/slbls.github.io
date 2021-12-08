import { Link, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type ProjectLinkProps = {
	readonly href?: string;
	readonly children: ReactNode;
};

export const ProjectLink = ({ href, children }: ProjectLinkProps) => {
	if (!href) {
		return (
			<Text
				as="span"
				cursor="not-allowed"
				textDecoration="line-through"
				color="gray.500"
			>
				{children}
			</Text>
		);
	}

	return (
		<Link color="purple.400" href={href} isExternal>
			{children}
		</Link>
	);
};
