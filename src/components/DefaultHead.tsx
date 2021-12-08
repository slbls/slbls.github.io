import { useAppMetadataContext } from "@/providers/app";
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
	children
}: DefaultHeadProps) => {
	const areChildrenBefore = childrenPosition === "before";

	const { name, titleSeparator } = useAppMetadataContext();

	return (
		<Head>
			{areChildrenBefore && children}

			{description && <meta content={description} name="description" />}

			<title>{page ? `${page}${titleSeparator}${name}` : name}</title>

			{!areChildrenBefore && children}
		</Head>
	);
};
