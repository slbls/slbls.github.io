import type { NextPage } from "next";

import { Header } from "@/components/Header";
import { EmailLink, Links } from "@/components/Links";
import { GitHubLink } from "@/components/Links/GitHubLink";
import { LinkedInLink } from "@/components/Links/LinkedInLink";
import {
	AUTHOR_NAME,
	AUTHOR_ROLE,
	EMAIL,
	GITHUB_USERNAME,
	LINKEDIN_USERNAME,
} from "@/config";

const Page = (() => (
	<main className="space-y-4">
		<Header heading={AUTHOR_NAME} subheading={AUTHOR_ROLE} />

		<Links>
			<EmailLink email={EMAIL} />
			<GitHubLink identifier={GITHUB_USERNAME} />
			<LinkedInLink identifier={LINKEDIN_USERNAME} />
		</Links>
	</main>
)) satisfies NextPage;

export default Page;
