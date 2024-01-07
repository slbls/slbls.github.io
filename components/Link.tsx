import { type ComponentChildren } from "preact";
import { type JSX } from "preact/jsx-runtime";

type LinkProps = JSX.IntrinsicElements["a"] & {
  readonly children: ComponentChildren;
};

export const Link = ({ children, ...props }: LinkProps) => (
  <a
    class="transition-transform inline-block text-sky-700 hover:underline hover:text-sky-800 hover:scale-105 hover:-rotate-2 visited:text-indigo-700 visited:hover:text-indigo-800"
    {...props}
  >
    {children}
  </a>
);
