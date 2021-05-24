import React from "react";

export default function SidenoteList({
	children
}: React.PropsWithChildren<{}>) {
	return (
		<aside>
			<ul className="flex space-x-12">{children}</ul>
		</aside>
	);
}
