import { type Metadata } from "next";
import { type ReactNode } from "react";

import { PageContainer } from "@/components/PageContainer";
import { APP_DESCRIPTION, APP_NAME } from "@/config";
import { AppProvider } from "@/providers/app";

export const metadata = {
	title: APP_NAME,
	description: APP_DESCRIPTION,
} satisfies Metadata;

type RootLayoutProps = {
	readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
	<html lang="en">
		<body>
			<AppProvider>
				<PageContainer>{children}</PageContainer>
			</AppProvider>
		</body>
	</html>
);

export default RootLayout;
