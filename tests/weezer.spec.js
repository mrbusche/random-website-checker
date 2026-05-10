const { test, expect } = require('@playwright/test');

test('checks for first book', async ({ page }) => {
    await page.goto('https://weezerwebstore.com/products/weezer-coloring-book-flipbook');
    await expect(page.locator('.badge.price__badge-sold-out.color-scheme-3').first()).toContainText('Sold out');
});
