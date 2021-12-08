import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { AppMetadataProvider } from "./app-metadata";

type AppProviderProps = {
	readonly children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => (
	<ChakraProvider>
		<AppMetadataProvider>{children}</AppMetadataProvider>
	</ChakraProvider>
);
