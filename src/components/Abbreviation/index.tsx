interface AbbreviationProps {
	readonly title: string;
	readonly text: string;
}

export default function Abbreviation({ title, text }: AbbreviationProps) {
	return (
		<abbr title={title} className="cursor-help">
			{text}
		</abbr>
	);
}
