import { ChakraProvider } from "@chakra-ui/react";
import { createContext, ReactNode, useContext } from "react";

type AppMetadata = {
	readonly name: string;
	readonly titleSeparator: string;
};

const AppMetadataContext = createContext<AppMetadata | undefined>(undefined);

export const useAppMetadataContext = () => {
	const context = useContext(AppMetadataContext);
	if (context === undefined) {
		throw new Error(
			"useAppMetadataContext must be used within a AppMetadataProvider."
		);
	}

	return context;
};

type AppMetadataProviderProps = {
	readonly children: ReactNode;
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const name = process.env.NEXT_PUBLIC_PACKAGE_NAME!;
const titleSeparator = " | ";

const AppMetadataProvider = ({ children }: AppMetadataProviderProps) => (
	<AppMetadataContext.Provider value={{ name, titleSeparator }}>
		{children}
	</AppMetadataContext.Provider>
);

type AppProviderProps = {
	readonly children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => (
	<ChakraProvider>
		<AppMetadataProvider>{children}</AppMetadataProvider>
	</ChakraProvider>
);
