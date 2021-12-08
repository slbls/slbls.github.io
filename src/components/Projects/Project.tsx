import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { ReactNode } from "react";
import { ProjectLink } from "./ProjectLink";

type ProjectProps = {
	readonly title: ReactNode;
	readonly emoji: ReactNode;
	readonly website?: string;
	readonly github?: string;
	readonly children: ReactNode;
};

export const Project = ({
	title,
	emoji,
	children,
	website,
	github
}: ProjectProps) => (
	<ListItem
		display="flex"
		justifyContent="space-between"
		boxShadow="sm"
		rounded="base"
		padding={4}
		backgroundColor="gray.700"
		color="gray.100"
	>
		<Box>
			<Text as="p">{title}</Text>

			<Text as="p" maxWidth="2xl" paddingY={4}>
				{children}
			</Text>

			<UnorderedList
				display="flex"
				marginLeft={0}
				styleType="none"
				experimental_spaceX={6}
			>
				<ListItem>
					<ProjectLink href={website}>Website</ProjectLink>
				</ListItem>
				<ListItem>
					<ProjectLink
						href={github ? `//github.com/${github}` : undefined}
					>
						GitHub
					</ProjectLink>
				</ListItem>
			</UnorderedList>
		</Box>

		<Box alignSelf="center">{emoji}</Box>
	</ListItem>
);
