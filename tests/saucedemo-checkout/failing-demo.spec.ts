import { test, expect } from '@playwright/test';

test('intentional failure: missing selector', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  // Healed: replace non-existent selector with stable selector discovered during exploration
  await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
});
