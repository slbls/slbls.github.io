import {
	ChakraProvider as BaseChakraProvider,
	type ChakraProviderProps as BaseChakraProviderProps,
	cookieStorageManagerSSR,
	localStorageManager,
} from "@chakra-ui/react";
import { type GetServerSideProps } from "next";

type ChakraProviderProps = Omit<BaseChakraProviderProps, "colorModeManager"> & {
	readonly cookies?: string;
};

export const ChakraProvider = ({ cookies, ...props }: ChakraProviderProps) => {
	const colorModeManager =
		typeof cookies === "string"
			? cookieStorageManagerSSR(cookies)
			: localStorageManager;

	return <BaseChakraProvider colorModeManager={colorModeManager} {...props} />;
};

export type ChakraPageProps = {
	readonly cookies: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps = (async ({ req: request }) => ({
	props: {
		cookies: request.headers.cookie ?? "",
	},
})) satisfies GetServerSideProps<ChakraPageProps>;
