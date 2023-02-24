import { DefaultHead } from "@/components/DefaultHead";
import { Header } from "@/components/Header";
import { SocialLinks } from "@/components/SocialLinks";
import {
	AUTHOR_NAME,
	AUTHOR_ROLE,
	EMAIL,
	GITHUB_USERNAME,
	LINKEDIN_USERNAME,
} from "@/config";
import type { NextPage } from "next";
import { Divider } from "@chakra-ui/react";

const name = "Home";

export const HomePage = (() => (
	<>
		<DefaultHead page={name} />

		<Header heading={AUTHOR_NAME} subheading={AUTHOR_ROLE} />

		<Divider
			width="5%"
			marginTop={4}
			marginBottom={2}
			borderColor="brand.800"
		/>

		<SocialLinks
			email={EMAIL}
			github={GITHUB_USERNAME}
			linkedin={LINKEDIN_USERNAME}
		/>
	</>
)) satisfies NextPage;
