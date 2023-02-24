import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

type PageContainerProps = {
	readonly children: ReactNode;
};

export const PageContainer = ({ children }: PageContainerProps) => (
	<Box maxWidth="512" paddingY="24" paddingX="12">
		{children}
	</Box>
);
