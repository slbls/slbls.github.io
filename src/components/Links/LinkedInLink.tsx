import { Linkedin } from "lucide-react";

import { ICON_SIZE } from "./Link";
import { SocialLink } from "./SocialLink";

type LinkedInLinkProps = {
	readonly identifier: string;
};

export const LinkedInLink = ({ identifier }: LinkedInLinkProps) => (
	<SocialLink
		icon={<Linkedin size={ICON_SIZE} />}
		domain="linkedin.com/in"
		identifier={identifier}
	/>
);
