type HeaderProps = {
	readonly heading: string;
	readonly subheading: string;
};

export const Header = ({ heading, subheading }: HeaderProps) => (
	<header className="leading-4">
		<h1 className="text-lg font-bold">{heading}</h1>
		<h2>{subheading}</h2>
	</header>
);
