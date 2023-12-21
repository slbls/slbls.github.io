import { type ComponentChildren } from "preact";

type NavbarLinksProps = {
  readonly children: ComponentChildren;
};

export const NavbarLinks = ({ children }: NavbarLinksProps) => (
  <ul class="flex gap-4 items-center p-1.5 text-sm text-slate-900">
    {children}
  </ul>
);
