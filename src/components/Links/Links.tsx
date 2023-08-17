import type { ReactNode } from "react";

type LinksProps = {
	readonly children: ReactNode;
};

export const Links = ({ children }: LinksProps) => (
	<nav className="align-start flex max-w-min flex-col items-start gap-2 text-sm">
		{children}
	</nav>
);
