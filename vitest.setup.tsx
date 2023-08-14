import "@testing-library/jest-dom/vitest";

import { type ReactNode } from "react";
import { createPortal } from "react-dom";
import { vi } from "vitest";

vi.mock("next/head", () => ({
	default: ({ children }: { readonly children: ReactNode }) => (
		<>{createPortal(children, document.head)}</>
	),
}));
