import { type ReactNode } from "react";

type LinkProps = {
	readonly icon: ReactNode;
	readonly href: string;
	readonly children: ReactNode;
};

export const ICON_SIZE = 14;

export const Link = ({ icon, href, children }: LinkProps) => (
	<span className="inline-flex items-center gap-2">
		{icon}

		<a className="hover:underline" href={href} target="_blank" rel="noreferrer">
			{children}
		</a>
	</span>
);
