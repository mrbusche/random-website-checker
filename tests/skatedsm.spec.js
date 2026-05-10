const { test, expect } = require('@playwright/test');

test('checks for new clinics', async ({ page }) => {
  await page.goto('https://skatedsm.org/learn-to-skate/clinics/');
  await expect(page.locator('h4.wp-block-heading')).toHaveCount(5);
});
