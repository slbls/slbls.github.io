import React from "react";
import "./App.css";
import Header from "./components/Header";
import SidenoteList from "./components/SidenoteList";
import Sidenote from "./components/Sidenote";
import Link from "./components/Link";
import CardList from "./components/CardList";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="max-w-2xl px-4 py-20 mx-auto space-y-20 lg:py-24 lg:max-w-4xl lg:space-y-24">
			<Header
				title="Home"
				subtitle="Front-end developer, technology enthusiast, geek."
			/>

			<main className="space-y-20 lg:space-y-24">
				<section className="space-y-6">
					<SidenoteList>
						<Sidenote
							top="Born in"
							center="1999"
							bottom="on May 14th"
						/>
						<Sidenote
							top="Programming since"
							center="8th grade"
							bottom="in 2012"
						/>
					</SidenoteList>

					<p className="max-w-xl text-gray-800">
						I'm{" "}
						<strong className="font-semibold">
							Spencer Berenson
						</strong>
						, your friendly neighborhood programmer and
						run-of-the-mill geek from{" "}
						<span
							className="underline underline-style-dotted cursor-help"
							title="The Constitution state!"
						>
							Connecticut, USA.
						</span>{" "}
						I strive to create <em>intuitive</em> and{" "}
						<em>expressive</em> experiences for the web.
					</p>

					<p className="max-w-xl text-gray-800">
						I just graduated from{" "}
						<abbr
							title="Central Connecticut State University"
							className="cursor-help"
						>
							CSSU
						</abbr>{" "}
						with a Bachelor of Science in Computer Science and am
						currently working as a Junior Software Developer at{" "}
						<Link
							href="allstarss.com"
							text="All Star Software Systems"
						/>
						.
					</p>

					<p className="max-w-xl text-gray-800">
						Check out some of my projects below! 👇🏻
					</p>
				</section>

				<section className="bg-gray-900 bg-full">
					<CardList>
						<Card
							title="UHSSE.org"
							emoji="🎒"
							website="uhsse.org"
							github="universityhigh/uhsse.org"
						>
							Reimagined, open-source website for a high school,
							in addition to a custom CMS backend for school staff
							to update website content — now maintained by other
							students.
						</Card>
						<Card
							title="Snapfish Shark"
							emoji="🦈"
							github="slbls/snapfish-shark"
						>
							Command-line utility for bulk download and
							organization of Snapfish photos.
						</Card>
					</CardList>
				</section>
			</main>

			<Footer github="slbls" />
		</div>
	);
}

export default App;
