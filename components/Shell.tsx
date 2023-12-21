import { type ComponentChild, type ComponentChildren } from "preact";

type ShellProps = {
  readonly navbar: ComponentChild;
  readonly children: ComponentChildren;
};

export const Shell = ({ navbar, children }: ShellProps) => (
  <>
    {navbar}

    <div class="p-6">
      {children}
    </div>
  </>
);
