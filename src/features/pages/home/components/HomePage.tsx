import { DefaultHead } from "@/components/DefaultHead";
import { Header } from "@/components/Header";
import { SocialLinks } from "@/components/SocialLinks";
import { EMAIL, GITHUB_USERNAME, LINKEDIN_USERNAME } from "@/config";
import type { NextPage } from "next";

const name = "Home";

export const HomePage: NextPage = () => (
	<>
		<DefaultHead page={name} />

		<Header
			heading="Spencer Berenson"
			subheading="Developer, technology enthusiast, human being"
		/>

		<SocialLinks
			email={EMAIL}
			github={GITHUB_USERNAME}
			linkedin={LINKEDIN_USERNAME}
		/>
	</>
);
