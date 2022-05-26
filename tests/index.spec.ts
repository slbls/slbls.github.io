import { expect, test } from "@playwright/test";

test("renders html tag", async ({ page }) => {
	await page.goto("/");
	await expect(page.locator("html")).toBeVisible();
});
