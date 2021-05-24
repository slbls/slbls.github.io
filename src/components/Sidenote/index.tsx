import React from "react";

interface SidenoteProps {
	readonly top: string;
	readonly center: string;
	readonly bottom: string;
}

export default function Sidenote({ top, center, bottom }: SidenoteProps) {
	return (
		<li>
			<small className="text-gray-500">{top}</small>
			<br />
			<b className="text-xl font-medium text-gray-700 lg:text-2xl">
				{center}
			</b>
			<br />
			<small className="text-gray-500">{bottom}</small>
		</li>
	);
}
