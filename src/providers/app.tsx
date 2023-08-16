"use client";

import { ChakraProvider } from "@chakra-ui/react";
import type { ReactNode } from "react";

import { theme } from "@/theme";

type AppProviderProps = {
	readonly children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => (
	<ChakraProvider theme={theme}>{children}</ChakraProvider>
);
