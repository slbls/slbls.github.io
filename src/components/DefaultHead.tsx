import { useAppMetadataContext } from "@/providers/app-metadata";
import Head from "next/head";
import { ReactNode } from "react";

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

	const {
		name,
		description: appDescription,
		titleSeparator,
	} = useAppMetadataContext();

	return (
		<Head>
			{areChildrenBefore && children}

			<meta content={description ?? appDescription} name="description" />

			<title>{page ? `${page}${titleSeparator}${name}` : name}</title>

			{!areChildrenBefore && children}
		</Head>
	);
};
