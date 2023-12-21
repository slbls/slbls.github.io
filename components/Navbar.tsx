import { type ComponentChildren } from "preact";

type NavbarProps = {
  readonly children: ComponentChildren;
};

export const Navbar = ({ children }: NavbarProps) => (
  <nav class="sticky top-0 flex items-center gap-6 border-b border-slate-100 px-6 py-4 bg-white">
    {children}
  </nav>
);
