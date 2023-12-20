import { type ComponentChildren } from "preact";
import { type JSX } from "preact/jsx-runtime";

type LinkProps = JSX.IntrinsicElements["a"] & {
  readonly children: ComponentChildren;
};

export const Link = ({ children, ...props }: LinkProps) => (
  <a
    class="transition-transform inline-block text-sky-500 hover:underline hover:text-sky-600 hover:scale-105 hover:-rotate-2 visited:text-indigo-500 visited:hover:text-indigo-600"
    {...props}
  >
    {children}
  </a>
);
