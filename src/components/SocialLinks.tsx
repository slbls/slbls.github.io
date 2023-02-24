import { Link, type SystemStyleObject, VStack } from "@chakra-ui/react";

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
			fontSize="sm"
			fontWeight="light"
			spacing={1}
		>
			<Link _after={linkAfter} href={`mailto:${email}`}>
				{email}
			</Link>
			<Link _after={linkAfter} href={`//${githubText}`} isExternal>
				{githubText}
			</Link>
			<Link _after={linkAfter} href={`//${linkedinText}`} isExternal>
				{linkedinText}
			</Link>
		</VStack>
	);
};
