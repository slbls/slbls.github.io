import "@/globals.css";

import { type Metadata } from "next";
import { type ReactNode } from "react";

import { PageContainer } from "@/components/PageContainer";
import { APP_DESCRIPTION, APP_NAME } from "@/config";

export const metadata = {
	title: APP_NAME,
	description: APP_DESCRIPTION,
} satisfies Metadata;

type RootLayoutProps = {
	readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
	<html lang="en">
		<body className="bg-zinc-200 text-zinc-900 ">
			<PageContainer>{children}</PageContainer>
		</body>
	</html>
);

export default RootLayout;
