import type { AppProps } from "next/app";

import { PageContainer } from "@/components/PageContainer";
import { AppProvider } from "@/providers/app";

const App = ({ Component, pageProps }: AppProps) => (
	<AppProvider>
		<PageContainer>
			<Component {...pageProps} />
		</PageContainer>
	</AppProvider>
);

export default App;
