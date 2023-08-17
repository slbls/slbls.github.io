import { Mail } from "lucide-react";

import { ICON_SIZE, Link } from "./Link";

type EmailLinkProps = {
	readonly email: string;
};

export const EmailLink = ({ email }: EmailLinkProps) => (
	<Link icon={<Mail size={ICON_SIZE} />} href={`mailto:${email}`}>
		{email}
	</Link>
);
