import { Container } from "@chakra-ui/react";
import { ReactNode } from "react";

type PageContainerProps = {
	readonly children: ReactNode;
};

export const PageContainer = ({ children }: PageContainerProps) => (
	<Container
		maxWidth="container.lg"
		paddingY={{ base: 20, lg: 24 }}
		experimental_spaceY={{ base: 20, lg: 24 }}
	>
		{children}
	</Container>
);
