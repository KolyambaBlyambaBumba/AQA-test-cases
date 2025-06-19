# Place Order Test

**Test File:** `PlaceOrder.test.js`

## Overview

This end-to-end test simulates a complete product purchase flow on [automationexercise.com], including account creation, adding a product to the cart, providing delivery and billing information, payment, and success confirmation.

---

## Steps

1. Open the Homepage and verify that home page is visible successfully.
2. Navigate to the Products page.
3. Search for a product (e.g., `"T-shirt"`) and add first item to the cart.
4. Click 'View Cart' button.
5. Verify that Cart page is displayed.
6. Click 'Proceed To Checkout' button.
7. Click 'Register / Login' button.
8. Fill all details in Signup and create account.
9. Verify 'ACCOUNT CREATED!' and click 'Continue' button.
10. Verify 'Logged in as username' at top.
11. Click 'Cart' button.
12. Click 'Proceed To Checkout' button.
13. Verify Address Details and Review Your Order.
14. Enter description in comment text area and click 'Place Order'.
15. Enter payment details.
16. Click 'Pay and Confirm Order' button.
17. Verify success message.
18. Click 'Delete Account' button.
19. Verify 'ACCOUNT DELETED!' and click 'Continue' button.

---

## Test Data

All dynamic data is stored in:  
`/testData/testData.json`

Includes:
- `userData`: First/Last Name, Email, Password, Address, Phone, etc.
- `paymentDetails`: Cardholder name, number, CVC, expiration date
- `successMessages`: Expected confirmation strings

---

## Run This Test

Use the following command to execute this test or all tests:

```bash
npm run test:order

npm run chrome.mocha