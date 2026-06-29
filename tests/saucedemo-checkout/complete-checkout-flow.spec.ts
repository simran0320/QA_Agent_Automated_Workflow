import { test, expect } from '@playwright/test';

test('Complete E2E checkout process', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  // Add items to cart
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
  await page.click('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');

  // Go to cart and proceed to checkout
  await page.click('[data-test="shopping-cart-link"]');
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('3');
  await page.click('[data-test="checkout"]');

  // Fill checkout info
  await page.fill('[data-test="firstName"]', 'John');
  await page.fill('[data-test="lastName"]', 'Doe');
  await page.fill('[data-test="postalCode"]', '12345');
  await page.click('[data-test="continue"]');

  // Verify overview
  await expect(page.locator('[data-test="payment-info-value"]')).toBeVisible();
  await expect(page.locator('[data-test="shipping-info-value"]')).toBeVisible();
  await expect(page.locator('[data-test="subtotal-label"]')).toContainText('$');

  // Finish
  await page.click('[data-test="finish"]');
  await expect(page.locator('[data-test="complete-header"]')).toBeVisible();
});
