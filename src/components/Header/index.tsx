interface HeaderProps {
	readonly title: string;
	readonly subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
	return (
		<header className="max-w-xl">
			<h1 className="text-xl font-semibold text-gray-400 lg:text-2xl">
				{title}
			</h1>
			<h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
				{subtitle}
			</h2>
		</header>
	);
}
