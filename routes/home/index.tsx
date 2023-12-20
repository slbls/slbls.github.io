import { type PageProps } from "$fresh/server.ts";

import { EmailLink } from "../../components/EmailLink.tsx";
import { ExternalLink } from "../../components/ExternalLink.tsx";

const Home = ({}: PageProps) => (
  <>
    <h1>Hello, I'm Spencer Berenson.</h1>

    <p class="max-w-lg font-extralight">
      I live in Connecticut with my cat, Nym, and work as a software engineer at
      {" "}
      <ExternalLink href="//desmos.com">Desmos Studio.</ExternalLink>{" "}
      Check me out on{" "}
      <ExternalLink href="//linkedin.com/in/spencer-berenson">
        LinkedIn
      </ExternalLink>{" "}
      and{" "}
      <ExternalLink href="//github.com/slbls">GitHub</ExternalLink>, or get in
      touch with me at <EmailLink>spencer@berenson.dev</EmailLink>
    </p>

    <p class="font-extralight">
      Thanks for visiting!
    </p>
  </>
);

export default Home;
