import { type ReactNode } from "react";

type ExternalLinkProps = {
	readonly href: string;
	readonly children: ReactNode;
};

export const ExternalLink = ({ href, children }: ExternalLinkProps) => (
	<a
		className="after:content-['_↗'] hover:underline"
		href={href}
		target="_blank"
		rel="noreferrer"
	>
		{children}
	</a>
);
