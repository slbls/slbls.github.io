import { Box, Link, Text } from "@chakra-ui/react";

type FooterProps = {
	readonly github: string;
	readonly email: string;
};

export const Footer = ({ github, email }: FooterProps) => {
	const year = new Date().getFullYear();

	return (
		<Box as="footer" fontSize="sm">
			For more,{" "}
			<Link href={`//github.com/${github}`} isExternal color="purple.800">
				visit my GitHub profile
			</Link>{" "}
			or{" "}
			<Link href={`mailto:${email}`} color="purple.800">
				send me an email
			</Link>
			.
			<Box as="br" marginBottom={2} />
			<Text as="small" fontSize="sm" color="gray.400">
				© <time dateTime={year.toString()}>{year}</time>
			</Text>
		</Box>
	);
};
