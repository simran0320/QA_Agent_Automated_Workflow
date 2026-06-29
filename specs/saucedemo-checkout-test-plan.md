# Saucedemo Checkout Test Plan

Summary
-------
Application: https://www.saucedemo.com
Scope: Validate the end-to-end checkout flow described in SCRUM-101 (login, add to cart, cart review, checkout information, order overview, completion).

Test Data
---------
- Username: standard_user
- Password: secret_sauce
- First name: John
- Last name: Doe
- Postal code: 12345

Selectors (validated during exploration)
--------------------------------------
- Username: [data-test="username"]
- Password: [data-test="password"]
- Login button: [data-test="login-button"]
- Add to cart (backpack): [data-test="add-to-cart-sauce-labs-backpack"]
- Cart badge: [data-test="shopping-cart-badge"]
- Cart link: [data-test="shopping-cart-link"]
- Checkout: [data-test="checkout"]
- First Name: [data-test="firstName"]
- Last Name: [data-test="lastName"]
- Postal Code: [data-test="postalCode"]
- Continue: [data-test="continue"]
- Payment info: [data-test="payment-info-value"]
- Shipping info: [data-test="shipping-info-value"]
- Finish: [data-test="finish"]
- Confirmation header: [data-test="complete-header"]

Test Scenarios
--------------

1) Login Flow (Precondition)
   - Steps:
     1. Go to https://www.saucedemo.com
     2. Fill username/password and click login
   - Expected:
     - Products page loads; login succeeds

2) Add Products to Cart (AC1)
   - Steps:
     1. On products page, add Backpack, Bike Light, Fleece Jacket
     2. Verify cart badge shows 3
   - Expected:
     - Items added; badge updates; buttons change to "Remove"

3) Cart Review (AC1)
   - Steps:
     1. Click cart link
     2. Verify item details, prices, quantities; Checkout button present
   - Expected:
     - All items listed with correct prices and nav controls

4) Checkout Information Validation (AC2)
   - Steps:
     1. Click Checkout
     2. Submit empty form and observe validation
     3. Fill individual fields to verify partial validation
   - Expected:
     - Validation errors appear for missing fields; cannot proceed until required fields filled

5) Order Overview (AC3)
   - Steps:
     1. Fill valid checkout info and Continue
     2. Verify payment, shipping, subtotal, tax, total
   - Expected:
     - Accurate price calculations and presence of payment/shipping info

6) Order Completion (AC4)
   - Steps:
     1. Click Finish
     2. Verify confirmation header, message, and cart cleared
   - Expected:
     - Confirmation displayed; cart cleared; Back Home works

7) Negative & Edge Cases
   - Invalid postal code formats
   - Rapid add/remove actions (race conditions)
   - Partial form submission variants

Organization
------------
Save tests under `tests/saucedemo-checkout/` keeping file names aligned with scenario names.
