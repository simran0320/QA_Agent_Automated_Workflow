import { test, expect } from '@playwright/test';

test('Cart review shows correct items and controls', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  // Add two items
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
  await page.click('[data-test="shopping-cart-link"]');

  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('2');
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
  await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible();
  await expect(page.locator('[data-test="checkout"]')).toBeVisible();
});
