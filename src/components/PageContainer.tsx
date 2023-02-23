import { Container } from "@chakra-ui/react";
import type { ReactNode } from "react";

type PageContainerProps = {
	readonly children: ReactNode;
};

export const PageContainer = ({ children }: PageContainerProps) => (
	<Container
		display="flex"
		flexDirection="column"
		justifyContent="center"
		maxWidth="container.sm"
		// Fixes CSS bug in Safari where the `vh` unit causes overflow.
		// https://css-tricks.com/css-fix-for-100vh-in-mobile-webkit/
		css={{
			minHeight: ["100vh", "-webkit-fill-available"],
		}}
	>
		{children}
	</Container>
);
