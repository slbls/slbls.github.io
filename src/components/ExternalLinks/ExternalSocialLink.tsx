import { ExternalLink } from "./ExternalLink";

type ExternalSocialLinksProps = {
	readonly domain: string;
	readonly identifier: string;
};

export const ExternalSocialLink = ({
	identifier,
	domain,
}: ExternalSocialLinksProps) => {
	const text = `${domain}/${identifier}`;

	return <ExternalLink href={`//${text}`}>{text}</ExternalLink>;
};
