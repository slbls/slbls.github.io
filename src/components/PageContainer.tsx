import { Container } from "@chakra-ui/react";
import { ReactNode } from "react";

type PageContainerProps = {
	readonly children: ReactNode;
};

export const PageContainer = ({ children }: PageContainerProps) => (
	<Container
		display="flex"
		flexDirection="column"
		justifyContent="center"
		maxWidth="container.sm"
		minHeight="100vh"
	>
		{children}
	</Container>
);
