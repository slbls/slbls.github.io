import { APP_DESCRIPTION, APP_NAME, TITLE_SEPARATOR } from "@/config";
import Head from "next/head";
import type { ReactNode } from "react";

type DefaultHeadProps = {
	readonly page?: string;
	readonly description?: string;
	readonly childrenPosition?: "before" | "after";
	readonly children?: ReactNode;
};

export const DefaultHead = ({
	page,
	description,
	childrenPosition = "before",
	children,
}: DefaultHeadProps) => {
	const areChildrenBefore = childrenPosition === "before";

	return (
		<Head>
			{areChildrenBefore && children}

			<meta content={description ?? APP_DESCRIPTION} name="description" />

			<title>{page ? `${page}${TITLE_SEPARATOR}${APP_NAME}` : APP_NAME}</title>

			{!areChildrenBefore && children}
		</Head>
	);
};
