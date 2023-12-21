type NavbarBrandingProps = {
  readonly name: string;
  readonly initials: string;
};

export const NavbarBranding = ({ name, initials }: NavbarBrandingProps) => (
  <a
    href="/"
    title={name}
    class="transition-transform inline-block rounded-sm p-1.5 bg-slate-900 text-sm font-bold text-white hover:scale-105 focus:scale-105 hover:-rotate-2 focus:-rotate-2"
  >
    {initials}
  </a>
);
