import { type PageProps } from "$fresh/server.ts";
import Home from "./home/index.tsx";

const Index = (props: PageProps) => <Home {...props} />;

export default Index;
