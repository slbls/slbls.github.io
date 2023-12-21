import { type ComponentChildren } from "preact";

type NavbarLinkProps = {
  readonly href: string;
  readonly children: ComponentChildren;
};

export const NavbarLink = ({ href, children }: NavbarLinkProps) => (
  <li>
    <a
      href={href}
      class="inline-block hover:[&:not([aria-current])]:scale-105 hover:[&:not([aria-current])]:-rotate-2 hover:[&:not([aria-current])]:text-black hover:[&:not([aria-current])]:underline aria-[current='page']:scale-105 aria-[current='page']:-rotate-2 aria-[current='page']:font-semibold"
    >
      {children}
    </a>
  </li>
);
