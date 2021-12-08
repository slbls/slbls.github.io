import { AttentionText } from "@/components/AttentionText";
import { DefaultHead } from "@/components/DefaultHead";
import { Footer } from "@/components/Footer";
import { Header, HeaderSubtitle, HeaderTitle } from "@/components/Header";
import {
	Project,
	ProjectEmoji,
	Projects,
	ProjectTitle
} from "@/components/Projects";
import {
	Summary,
	SummaryParagraph,
	SummaryPoint,
	SummaryPoints
} from "@/components/Summary";
import { Link, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

const name = "Home";

export const HomePage: NextPage = () => (
	<>
		<DefaultHead page={name} />

		<Header>
			<HeaderTitle>{name}</HeaderTitle>
			<HeaderSubtitle>
				Developer, technology enthusiast, human being.
			</HeaderSubtitle>
		</Header>

		<Summary>
			<SummaryPoints>
				<SummaryPoint
					top="Bachelor of Science"
					center="Computer Science"
					bottom="Central Connecticut State University"
				/>
				<SummaryPoint
					top="Programming since"
					center="8th grade"
					bottom="in 2012"
				/>
			</SummaryPoints>

			<SummaryParagraph>
				I&apos;m{" "}
				<Text as="strong" fontWeight="semibold">
					Spencer Berenson
				</Text>
				, friendly neighborhood programmer and geek from Connecticut,
				USA. My superpower is learning, whether it&apos;s tech, music
				production, or linguistics—I love the rush of discovery and
				solving problems.
			</SummaryParagraph>

			<SummaryParagraph>
				I currently work as a{" "}
				<AttentionText>Junior Software Developer</AttentionText> at{" "}
				<Link href="//allstarss.com" isExternal color="purple.800">
					All Star Software Systems
				</Link>
				, where I design and develop data-oriented web applications with{" "}
				<AttentionText>React</AttentionText> and{" "}
				<AttentionText>OnBase</AttentionText>, along with desktop
				utilities built on the <AttentionText>.NET</AttentionText>{" "}
				platform.
			</SummaryParagraph>

			<SummaryParagraph>
				<Text as="span" fontStyle="italic">
					Check out some personal and volunteer projects below! 👇🏻
				</Text>
			</SummaryParagraph>
		</Summary>

		<Projects>
			<Project
				title={<ProjectTitle>Snapfish Shark</ProjectTitle>}
				emoji={<ProjectEmoji>🦈</ProjectEmoji>}
				github="slbls/snapfish-shark"
			>
				Command-line utility for bulk download and organization of
				Snapfish photos.
			</Project>
			<Project
				title={<ProjectTitle>UHSSE.org</ProjectTitle>}
				emoji={<ProjectEmoji>🎒</ProjectEmoji>}
				website="//uhsse.org"
				github="universityhigh/uhsse.org"
			>
				Redesigned, open-source website for a high school, in addition
				to a custom CMS backend for school staff to update website
				content — now maintained by other students.
			</Project>
		</Projects>

		<Footer github="slbls" email="spencer@berenson.dev" />
	</>
);
