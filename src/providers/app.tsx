import { ChakraProvider } from "@chakra-ui/react";
import type { ReactNode } from "react";

type AppProviderProps = {
	readonly children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => (
	<ChakraProvider>{children}</ChakraProvider>
);
