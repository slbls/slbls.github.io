import { Link } from "./Link.tsx";

type EmailLinkProps = {
  readonly children: string;
};

export const EmailLink = ({ children }: EmailLinkProps) => (
  <Link
    href={`mailto:${children}`}
  >
    {children}
  </Link>
);
