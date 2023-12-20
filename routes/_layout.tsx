import { type PageProps } from "$fresh/server.ts";

const Layout = ({ Component, route }: PageProps) => (
  <>
    <nav class="transition-transform fixed top-4 right-4 hover:scale-105 focus:scale-105 hover:-rotate-2 focus:-rotate-2">
      <a
        href="/"
        title="Spencer Berenson"
        class="inline-block rounded-sm p-1.5 bg-slate-900 text-sm font-bold text-white"
      >
        SB
      </a>
    </nav>

    <div class="flex flex-col space-y-4">
      <Component />
    </div>
  </>
);

export default Layout;
