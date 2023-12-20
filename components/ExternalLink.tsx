import { type ComponentChildren } from "preact";
import { Link } from "./Link.tsx";

type ExternalLinkProps = {
  readonly href: string;
  readonly children: ComponentChildren;
};

export const ExternalLink = ({ href, children }: ExternalLinkProps) => (
  <Link
    href={href}
    rel="noreferrer noopener"
    target="_blank"
  >
    {children}
  </Link>
);
