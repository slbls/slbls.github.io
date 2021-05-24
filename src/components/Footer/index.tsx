import Link from "../Link";

interface FooterProps {
	readonly github: string;
	readonly email: string;
}

export default function Footer({ github, email }: FooterProps) {
	return (
		<footer className="text-sm bg-full">
			For more,{" "}
			<Link
				href={`github.com/${github}`}
				text="visit my GitHub profile"
			/>{" "}
			or <Link href={`mailto:${email}`} text="send me an email" isMail />
			.
			<br className="mb-2" />
			<small className="text-sm text-gray-400">
				© {new Date().getFullYear()}
			</small>
		</footer>
	);
}
