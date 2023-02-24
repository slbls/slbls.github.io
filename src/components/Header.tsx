import { Heading, VStack } from "@chakra-ui/react";

type HeaderProps = {
	readonly heading: string;
	readonly subheading: string;
};

export const Header = ({ heading, subheading }: HeaderProps) => (
	<VStack as="header" spacing="1" align="flex-start">
		<Heading as="h1" size="md" fontWeight="normal">
			{heading}
		</Heading>

		<Heading as="h2" size="sm" fontWeight="light">
			{subheading}
		</Heading>
	</VStack>
);
