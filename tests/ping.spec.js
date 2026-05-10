const { test, expect } = require('@playwright/test');

test.describe('ping website', () => {
    test('hits mrbusche.com', async ({ page }) => {
        await page.goto('https://mrbusche.com?automated=true');
        await expect(page.locator('a.home-link').first()).toHaveText('mrbusche.com');
    });

    test('hits https://cottagesonwash.com', async ({ page }) => {
        await page.goto('https://cottagesonwash.com?automated=true');
        await expect(page.locator('a.navbar-brand').first()).toHaveText('Cottages on Wash');
        await expect(page.locator('h2').first()).toHaveText('Cozy Cottage');
        await expect(page.locator('h2').nth(1)).toHaveText('Haven Hideaway');
    });

    test('hits Fantasy Movie League Calculator', async ({ page }) => {
        await page.goto('https://fmlcalculator.netlify.app/?automated=true');
        await expect(page.locator('h1').first()).toHaveText('FML Calculator');

        const movieText = await page.locator('#movieInput').innerText();
        expect(movieText.replace(/\s/g, '')).toBe('Movies');

        const costText = await page.locator('#costInput').innerText();
        expect(costText.replace(/\s/g, '')).toBe('Cost');

        const estimateText = await page.locator('#estimateInput').innerText();
        expect(estimateText.replace(/\s/g, '')).toBe('Estimate');
    });

    test('hits Occurrence Counter', async ({ page }) => {
        await page.goto('https://mrbusche.com/occurrence-counter/?automated=true');
        await expect(page.locator('h1')).toHaveText('Occurrence Counter');
        await expect(page.locator('h5')).toHaveText('Supports return, pipe, or comma delimited lists');

        const minCountText = await page.locator('label').nth(1).innerText();
        expect(minCountText.replace(/\s/g, ' ').trim()).toBe('Minimum count');
    });

    test('hits Random Order Generator', async ({ page }) => {
        await page.goto('https://mrbusche.com/random-order-generator/?automated=true');
        await expect(page.locator('h1').first()).toHaveText('Paste a list to generate a random order');

        const footerText = await page.locator('footer').innerText();
        expect(footerText.replace(/\s/g, ' ').trim()).toBe('Created by Matt Busche');
    });
});
