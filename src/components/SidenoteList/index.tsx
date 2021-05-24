import React from "react";

export default function SidenoteList({
	children
}: React.PropsWithChildren<{}>) {
	return (
		<aside className="mt-12">
			<ul className="flex space-x-12">{children}</ul>
		</aside>
	);
}
