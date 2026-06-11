const { test, expect } = require('@playwright/test');

test('checks for first book', async ({ page }) => {
  await page.goto('https://sive.rs/book');
  await page.getByRole('link', { name: 'newest' }).click();

  const datetime = await page.locator('#booklist li').first().locator('time').getAttribute('datetime');
  expect(datetime).toBe('2026-05-22');
});
