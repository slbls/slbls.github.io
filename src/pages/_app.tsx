import type { AppProps } from "next/app";

import { PageContainer } from "@/components/PageContainer";
import { type ChakraPageProps } from "@/lib/chakra";
import { AppProvider } from "@/providers/app";

const App = ({ Component, pageProps }: AppProps<ChakraPageProps>) => (
	<AppProvider cookies={pageProps.cookies}>
		<PageContainer>
			<Component {...pageProps} />
		</PageContainer>
	</AppProvider>
);

export default App;
