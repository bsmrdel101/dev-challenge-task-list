import { test, expect } from '@playwright/test';


test.describe('Home', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test('Load page', async ({ page }) => {
    const title = page.getByTestId('title');
    await expect(title).toBeVisible();
  });  
});
