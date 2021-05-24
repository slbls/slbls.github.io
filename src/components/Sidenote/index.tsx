import React from "react";

interface SidenoteProps {
	readonly top: string;
	readonly center: string;
	readonly bottom: string;
}

export default function Sidenote({ top, center, bottom }: SidenoteProps) {
	return (
		<li>
			<small className="text-gray-600">{top}</small>
			<br />
			<b className="text-xl font-medium text-gray-900">{center}</b>
			<br />
			<small className="text-gray-600">{bottom}</small>
		</li>
	);
}
