import { ExternalLink } from "./ExternalLink";

type ExternalEmailLinkProps = {
	readonly children: string;
};

export const ExternalEmailLink = ({ children }: ExternalEmailLinkProps) => (
	<ExternalLink href={`mailto:${children}`}>{children}</ExternalLink>
);
