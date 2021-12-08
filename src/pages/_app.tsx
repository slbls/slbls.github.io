import { PageContainer } from "@/components/PageContainer";
import { ScreenContainer } from "@/components/ScreenContainer";
import { AppProvider } from "@/providers/app";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
	<AppProvider>
		<ScreenContainer>
			<PageContainer>
				<Component {...pageProps} />
			</PageContainer>
		</ScreenContainer>
	</AppProvider>
);

export default App;
