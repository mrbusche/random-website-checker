const { test, expect } = require('@playwright/test');

test.describe('check kirkendall', () => {
  test('checks for new releases', async ({ page }) => {
    await page.goto(
      'https://kplcatalog.ankenyiowa.gov/polaris/search/searchresults.aspx?ctx=3.1033.0.0.5&type=Keyword&term=%22:%20ON%20ORDER%22&by=KW&sort=RELEVANCE&limit=TOM=*&query=&page=0&searchid=1',
    );

    const text = await page.locator('.c-results-utility-result-count').nth(1).innerText();
    expect(text.replace(/\s\s+/g, ' ').trim()).toBe('1 - 10 of 27');
  });

  test('checks new videos', async ({ page }) => {
    await page.goto('https://kplcatalog.ankenyiowa.gov/polaris/Search/newreleases.aspx?ListingTypeID=27');
    await expect(page.locator('.new-releases__link a').first()).toHaveText('Strange journey : the story of Rocky Horror');
  });
});

test.describe('check bridges', () => {
  test('checks for new audiobooks', async ({ page }) => {
    await page.goto('https://bridges.overdrive.com/bridges-kirkendall/content/collection/37479?addedDate=days-0-7');

    const hasNoResults = (await page.locator('.Results-noResultsHeading').count()) > 0;
    if (!hasNoResults) {
      await expect(page.locator('.search-text.h1').first()).toContainText('5 results');
    }
  });

  test('checks for new ebooks', async ({ page }) => {
    await page.goto('https://bridges.overdrive.com/bridges-kirkendall/content/collection/37473?addedDate=days-0-7');

    const hasNoResults = (await page.locator('.Results-noResultsHeading').count()) > 0;
    if (!hasNoResults) {
      await expect(page.locator('.search-text.h1').first()).toContainText('31 results');
    }
  });
});
