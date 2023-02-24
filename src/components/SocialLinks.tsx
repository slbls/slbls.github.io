import { VStack, Link, SystemStyleObject } from "@chakra-ui/react";

type SocialLinksProps = {
	readonly email: string;
	readonly github: string;
	readonly linkedin: string;
};

const linkAfter = {
	content: `" ↗"`,
} satisfies SystemStyleObject;

export const SocialLinks = ({ email, github, linkedin }: SocialLinksProps) => {
	const githubText = `github.com/${github}`;
	const linkedinText = `linkedin.com/in/${linkedin}`;

	return (
		<VStack
			as="nav"
			align="flex-start"
			spacing={1}
			fontSize="sm"
			fontWeight="light"
		>
			<Link href={`mailto:${email}`} _after={linkAfter}>
				{email}
			</Link>
			<Link href={`//${githubText}`} isExternal _after={linkAfter}>
				{githubText}
			</Link>
			<Link href={`//${linkedinText}`} isExternal _after={linkAfter}>
				{linkedinText}
			</Link>
		</VStack>
	);
};
