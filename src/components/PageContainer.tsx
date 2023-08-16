"use client";

import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

type PageContainerProps = {
	readonly children: ReactNode;
};

export const PageContainer = ({ children }: PageContainerProps) => (
	<Box maxWidth="512" paddingX="12" paddingY="24">
		{children}
	</Box>
);
