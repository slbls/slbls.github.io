import { Link, type LinkProps } from "@chakra-ui/react";

import { EXTERNAL_LINK_CHARACTER } from "@/config";

type ExternalLinkProps = Omit<LinkProps, "isExternal" | "_after">;

export const ExternalLink = (props: ExternalLinkProps) => (
	<Link
		_after={{
			content: `" ${EXTERNAL_LINK_CHARACTER}"`,
		}}
		isExternal
		{...props}
	/>
);
