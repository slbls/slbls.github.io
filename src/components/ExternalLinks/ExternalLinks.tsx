import type { ReactNode } from "react";

type ExternalLinksProps = {
	readonly children: ReactNode;
};

export const ExternalLinks = ({ children }: ExternalLinksProps) => (
	<nav className="align-start mt-4 flex flex-col gap-1 text-sm">{children}</nav>
);
