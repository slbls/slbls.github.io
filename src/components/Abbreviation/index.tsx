import React from "react";

interface AbbreviationProps {
	readonly title: string;
	readonly text: string;
}

export default function Abbreviation({ title, text }) {
	return (
		<abbr title={title} className="cursor-help">
			{text}
		</abbr>
	);
}
