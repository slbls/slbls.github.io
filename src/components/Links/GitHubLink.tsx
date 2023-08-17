import { Github } from "lucide-react";

import { ICON_SIZE } from "./Link";
import { SocialLink } from "./SocialLink";

type GitHubLinkProps = {
	readonly identifier: string;
};

export const GitHubLink = ({ identifier }: GitHubLinkProps) => (
	<SocialLink
		icon={<Github size={ICON_SIZE} />}
		domain="github.com"
		identifier={identifier}
	/>
);
