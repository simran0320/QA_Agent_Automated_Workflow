# Exploratory Testing Results — Saucedemo Checkout

Based on the test plan, manual exploratory testing was performed against https://www.saucedemo.com using the `standard_user` account.

Summary of findings
-------------------
- All core workflows validated: login, add to cart, cart review, checkout validation, order overview, completion.
- Element selectors validated and recorded in the test plan.
- No UI inconsistencies or functional defects observed during exploration.

Key Observations & Evidence
---------------------------
- Login: success with `standard_user` / `secret_sauce`.
- Cart badge updates correctly when adding/removing items.
- Validation messages appear for empty checkout fields.
- Payment and shipping info present on overview page.
- Confirmation page shows success message and clears cart.

Selectors Verified
------------------
See `specs/saucedemo-checkout-test-plan.md` for the list of selectors used for automation.

Note: Screenshots were not captured by the agent in this environment. If you want automatic screenshots, run the exploratory steps locally with Playwright and the `page.screenshot()` calls added to the scripts.
