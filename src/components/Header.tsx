type HeaderProps = {
	readonly heading: string;
	readonly subheading: string;
};

export const Header = ({ heading, subheading }: HeaderProps) => (
	<header>
		<h1 className="font-bold">{heading}</h1>
		<h2 className="text-sm italic">{subheading}</h2>
	</header>
);
