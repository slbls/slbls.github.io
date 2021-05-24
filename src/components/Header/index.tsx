import React from "react";

interface HeaderProps {
	readonly title: string;
	readonly subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
	return (
		<header className="px-4 pt-12">
			<h1 className="text-lg font-semibold text-gray-400">{title}</h1>
			<h2 className="text-2xl font-bold">{subtitle}</h2>
		</header>
	);
}
