import { type PageProps } from "$fresh/server.ts";
import { Navbar } from "../components/Navbar.tsx";
import { NavbarBranding } from "../components/NavbarBranding.tsx";
import { NavbarLink } from "../components/NavbarLink.tsx";
import { NavbarLinks } from "../components/NavbarLinks.tsx";
import { Shell } from "../components/Shell.tsx";

const Layout = ({ Component }: PageProps) => (
  <Shell
    navbar={
      <Navbar>
        <NavbarBranding name="Spencer Berenson" initials="SB" />
        <NavbarLinks>
          <NavbarLink href="/">Home</NavbarLink>
        </NavbarLinks>
      </Navbar>
    }
  >
    <Component />
  </Shell>
);

export default Layout;
