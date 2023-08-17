import { type ReactNode } from "react";

import { Link } from "./Link";

type SocialLinksProps = {
	readonly icon: ReactNode;
	readonly domain: string;
	readonly identifier: string;
};

export const SocialLink = ({ icon, identifier, domain }: SocialLinksProps) => (
	<Link icon={icon} href={`//${domain}/${identifier}`}>
		{identifier}
	</Link>
);
