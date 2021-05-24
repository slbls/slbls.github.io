import React from "react";

export default function SidenoteList({
	children
}: React.PropsWithChildren<{}>) {
	return (
		<aside className="lg:float-right lg:!mt-0">
			<ul className="flex space-x-12 lg:flex-col lg:space-x-0 lg:space-y-6">
				{children}
			</ul>
		</aside>
	);
}
