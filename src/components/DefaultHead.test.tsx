import { render } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";

import { APP_DESCRIPTION } from "@/config";

import { DefaultHead } from "./DefaultHead";

vi.mock("@/config", async () => {
	const originalModule = await import("@/config");

	return {
		...originalModule,
		APP_DESCRIPTION: "This is a test description",
	};
});

const getTitle = () => document.head.querySelector("title");
const getDescriptionMeta = (content: string) =>
	document.head.querySelector(`meta[name="description"][content="${content}"]`);

afterEach(() => {
	document.head.innerHTML = "";
});

it("renders the correct title when page prop is provided", () => {
	const page = "About";
	render(<DefaultHead page={page} />);

	const title = getTitle();
	expect(title).toBeInTheDocument();
	expect(title).toHaveTextContent(`${page} | berenson.dev`);
});

it("renders the correct title when page prop is not provided", () => {
	render(<DefaultHead />);

	const title = getTitle();
	expect(title).toBeInTheDocument();
	expect(title).toHaveTextContent("berenson.dev");
});

it("renders the correct description when description prop is provided", () => {
	const description = "This is a test description";
	render(<DefaultHead description={description} />);

	const meta = getDescriptionMeta(description);
	expect(meta).toBeInTheDocument();
});

it("renders the default description when description prop is not provided", () => {
	render(<DefaultHead />);

	const meta = getDescriptionMeta(APP_DESCRIPTION);
	expect(meta).toBeInTheDocument();
});

it("renders the children before the meta tags when childrenPosition prop is 'before'", () => {
	render(
		<DefaultHead childrenPosition="before">
			<meta charSet="utf-8" />
		</DefaultHead>,
	);

	console.log(document.head.innerHTML);
	expect(document.head.firstChild).toHaveAttribute("charset", "utf-8");
});

it("renders the children after the meta tags when childrenPosition prop is 'after'", () => {
	render(
		<DefaultHead childrenPosition="after">
			<meta charSet="utf-8" />
		</DefaultHead>,
	);

	expect(document.head.firstChild).not.toHaveAttribute("charset", "utf-8");
	expect(document.head.lastChild).toHaveAttribute("charset", "utf-8");
});
