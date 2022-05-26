import { createContext, ReactNode, useContext } from "react";

type AppMetadata = {
	readonly name: string;
	readonly description: string;
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

const appMetadata: AppMetadata = {
	name: process.env.NEXT_PUBLIC_PACKAGE_NAME,
	description: process.env.NEXT_PUBLIC_PACKAGE_DESCRIPTION,
	titleSeparator: " | ",
};

export const AppMetadataProvider = ({ children }: AppMetadataProviderProps) => (
	<AppMetadataContext.Provider value={appMetadata}>
		{children}
	</AppMetadataContext.Provider>
);
