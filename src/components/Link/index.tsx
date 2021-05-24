import classNames from "classnames";

interface LinkProps {
	readonly href?: string;
	readonly text: string;
	readonly hasDarkBackground?: boolean;
}

export default function Link({ href, text, hasDarkBackground }: LinkProps) {
	return (
		<a
			className={classNames({
				"text-indigo-400": href && hasDarkBackground,
				"text-indigo-800": href && !hasDarkBackground,
				"hover:underline": href,
				"text-gray-500 line-through cursor-not-allowed pointer-events-none":
					!href
			})}
			href={href ? "//" + href : "#"}
			target="_blank"
			rel="noreferrer noopener"
		>
			{text}
		</a>
	);
}
