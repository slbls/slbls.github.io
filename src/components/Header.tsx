import { Heading } from "@chakra-ui/react";

type HeaderProps = {
	readonly heading: string;
	readonly subheading: string;
};

export const Header = ({ heading, subheading }: HeaderProps) => (
	<header>
		<Heading as="h1" size="md" fontWeight="normal">
			{heading}
		</Heading>
		<Heading as="h2" size="sm" fontWeight="light">
			{subheading}
		</Heading>
	</header>
);
