const { test, expect } = require('@playwright/test');
const wishlistUrl = 'https://www.amazon.com/hz/wishlist/ls/153OV2P85MJD6?type=wishlist&filter=unpurchased&sort=price-asc&viewType=list';

test('checks for first book', async ({ page }) => {
  await page.goto(wishlistUrl);

  const signInButton = page.locator('.a-button-text').first();
  if ((await signInButton.count()) > 0) {
    await signInButton.click({ force: true });
    await page.goto(wishlistUrl);
  }

  await expect(await page.locator('span.a-offscreen').first()).toHaveText('$4.65');
});
