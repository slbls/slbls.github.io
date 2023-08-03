import { Divider } from "@chakra-ui/react";
import type { NextPage } from "next";

import { DefaultHead } from "@/components/DefaultHead";
import {
	ExternalEmailLink,
	ExternalLinks,
	ExternalSocialLink,
} from "@/components/ExternalLinks";
import { Header } from "@/components/Header";
import {
	AUTHOR_NAME,
	AUTHOR_ROLE,
	EMAIL,
	GITHUB_USERNAME,
	LINKEDIN_USERNAME,
} from "@/config";

const name = "Home";

export const HomePage = (() => (
	<>
		<DefaultHead page={name} />

		<Header heading={AUTHOR_NAME} subheading={AUTHOR_ROLE} />

		<Divider
			maxWidth="50%"
			marginTop={4}
			marginBottom={2}
			borderColor="brand.800"
		/>

		<ExternalLinks>
			<ExternalEmailLink>{EMAIL}</ExternalEmailLink>
			<ExternalSocialLink domain="github.com" identifier={GITHUB_USERNAME} />
			<ExternalSocialLink
				domain="linkedin.com/in"
				identifier={LINKEDIN_USERNAME}
			/>
		</ExternalLinks>
	</>
)) satisfies NextPage;
