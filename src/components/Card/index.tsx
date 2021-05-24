import React from "react";
import Link from "../Link";

interface CardProps {
	readonly title: string;
	readonly emoji: string;
	readonly website?: string;
	readonly github?: string;
}

export default function Card({
	title,
	emoji,
	children,
	website,
	github
}: React.PropsWithChildren<CardProps>) {
	return (
		<li className="p-4 text-gray-100 bg-gray-800 rounded shadow-sm">
			<p>
				<b className="text-xl font-medium">{title}</b>
				<span className="float-right text-xl">{emoji}</span>
			</p>
			<p className="py-4">{children}</p>

			<ul className="flex space-x-6">
				<li>
					<Link
						href={github ? website : undefined}
						text="Website"
						hasDarkBackground
					/>
				</li>
				<li>
					<Link
						href={github ? `github.com/${github}` : undefined}
						text="GitHub"
						hasDarkBackground
					/>
				</li>
			</ul>
		</li>
	);
}
