import React from "react";

export default function SidenoteList({
	children
}: React.PropsWithChildren<{}>) {
	return (
		<aside className="lg:absolute lg:top-0 lg:right-0 lg:!mt-0">
			<ul className="flex space-x-12 lg:flex-col lg:space-x-0 lg:space-y-6">
				{children}
			</ul>
		</aside>
	);
}
