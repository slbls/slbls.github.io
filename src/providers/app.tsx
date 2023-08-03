import type { ReactNode } from "react";

import { ChakraProvider } from "@/lib/chakra";
import { theme } from "@/theme";

type AppProviderProps = {
	readonly cookies: string;
	readonly children: ReactNode;
};

export const AppProvider = ({ cookies, children }: AppProviderProps) => (
	<ChakraProvider cookies={cookies} theme={theme}>
		{children}
	</ChakraProvider>
);
