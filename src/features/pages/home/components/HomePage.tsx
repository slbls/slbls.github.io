import { DefaultHead } from "@/components/DefaultHead";
import { Header } from "@/components/Header";
import { SocialLinks } from "@/components/SocialLinks";
import { NextPage } from "next";

const name = "Home";

export const HomePage: NextPage = () => (
	<>
		<DefaultHead page={name} />

		<Header
			heading="Spencer Berenson"
			subheading="Developer, technology enthusiast, human being"
		/>

		<SocialLinks
			email="spencer@berenson.dev"
			github="slbls"
			linkedin="spencer-berenson"
		/>
	</>
);
