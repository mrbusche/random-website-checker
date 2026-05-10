const { test, expect } = require('@playwright/test');

test('checks for page size', async ({ page }) => {
    await page.goto('https://www.ankenyiowa.gov/Facilities');
    await page.locator('#FacilityTypesButton').click();
    await page.locator('#CheckAllFacilityTypes').click();
    await page.locator('#chkSidebarFacilityTypes6').click();
    await page.locator('#SearchButton').click();
    await expect(page.locator('input[id="hiddenLastPageNumber"]')).toHaveValue('10');
});
