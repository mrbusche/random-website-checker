const { test, expect } = require('@playwright/test');

test('checks for first book', async ({ page }) => {
  await page.goto('https://www.amazon.com/hz/wishlist/ls/153OV2P85MJD6?type=wishlist&filter=unpurchased&sort=price-asc&viewType=list');

  const signInButton = page.locator('.a-button-text').first();
  if ((await signInButton.count()) > 0) {
    await signInButton.click({ force: true });
  }

  await expect(await page.locator('span.a-offscreen').first()).toHaveText('$4.65');
});
