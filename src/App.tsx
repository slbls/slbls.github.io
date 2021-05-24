import "./App.css";
import Header from "./components/Header";
import SidenoteList from "./components/SidenoteList";
import Sidenote from "./components/Sidenote";
import Attention from "./components/Attention";
import Link from "./components/Link";
import CardList from "./components/CardList";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="max-w-2xl px-4 py-20 mx-auto space-y-20 lg:py-24 lg:max-w-4xl lg:space-y-24">
			<Header
				title="Home"
				subtitle="Developer, technology enthusiast, human being."
			/>

			<section className="!mt-10 lg:!mt-12 space-y-6 lg:flow-root">
				<SidenoteList>
					<Sidenote
						top="Bachelor of Science"
						center="Computer Science"
						bottom="Central Connecticut State University"
					/>
					<Sidenote
						top="Programming since"
						center="8th grade"
						bottom="in 2012"
					/>
				</SidenoteList>

				<p className="max-w-xl text-gray-800 lg:float-left lg:!mt-0">
					I'm{" "}
					<strong className="font-semibold">Spencer Berenson</strong>,
					friendly neighborhood programmer and geek from Connecticut,
					USA. My superpower is learning, whether it's tech, music
					production, or linguistics—I love the rush of discovery and
					solving problems.
				</p>

				<p className="max-w-xl text-gray-800 lg:float-left">
					I currently work as a{" "}
					<Attention text="Junior Software Developer" /> at{" "}
					<Link
						href="allstarss.com"
						text="All Star Software Systems"
					/>
					, where I design and develop data-oriented web applications
					with <Attention text="React" /> and{" "}
					<Attention text="OnBase" />, along with desktop utilities
					built on the <Attention text=".NET" /> platform.
				</p>

				<p className="max-w-xl italic text-gray-800 lg:float-left">
					Check out some personal and volunteer projects below! 👇🏻
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
						Redesigned, open-source website for a high school, in
						addition to a custom CMS backend for school staff to
						update website content — now maintained by other
						students.
					</Card>
					<Card
						title="Snapfish Shark"
						emoji="🦈"
						github="slbls/snapfish-shark"
					>
						Command-line utility for bulk download and organization
						of Snapfish photos.
					</Card>
				</CardList>
			</section>

			<Footer github="slbls" email="spencer@berenson.dev" />
		</div>
	);
}

export default App;
