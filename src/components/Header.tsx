import { Heading, VStack } from "@chakra-ui/react";

type HeaderProps = {
	readonly heading: string;
	readonly subheading: string;
};

export const Header = ({ heading, subheading }: HeaderProps) => (
	<VStack as="header" align="flex-start" spacing="1">
		<Heading as="h1" fontWeight="normal" size="md">
			{heading}
		</Heading>

		<Heading as="h2" fontWeight="light" size="sm">
			{subheading}
		</Heading>
	</VStack>
);
