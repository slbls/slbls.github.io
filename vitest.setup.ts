import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
import matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";

declare module "vitest" {
	// `any` and `{}` types are required for this fix.
	// https://github.com/testing-library/jest-dom/issues/439#issuecomment-1536524120
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	type Assertion<T = any> = {} & jest.Matchers<void, T> &
		TestingLibraryMatchers<T, void>;
}

expect.extend(matchers);
