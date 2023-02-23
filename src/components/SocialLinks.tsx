import { Box, Link } from "@chakra-ui/react";

type SocialLinksProps = {
	readonly email: string;
	readonly github: string;
	readonly linkedin: string;
};

export const SocialLinks = ({ email, github, linkedin }: SocialLinksProps) => (
	<Box
		as="nav"
		display="flex"
		gap={4}
		marginTop={2}
		fontSize="xs"
		color="blue.600"
	>
		<Link href={`mailto:${email}`}>Email</Link>
		<Link href={`//github.com/${github}`} isExternal>
			GitHub
		</Link>
		<Link href={`//linkedin.com/in/${linkedin}`} isExternal>
			LinkedIn
		</Link>
	</Box>
);
