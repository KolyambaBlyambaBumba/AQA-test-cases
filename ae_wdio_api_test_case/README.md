# User Verification Test

**Test File:** `verifyUser.test.js`

## Overview

This end-to-end test validates user account creation and deletion flow on [automationexercise.com].  
The scenario combines **UI interactions** with **API verification** to ensure data consistency.

---

## Steps

1. Open the Homepage and verify it loads successfully.
2. Navigate to the **Login** page.
3. Sign up a new user with randomly generated data (`@faker-js/faker`).
4. Fill account information and submit.
5. Verify `'ACCOUNT CREATED!'` message and return to Homepage.
6. **API Check #1:** Confirm user exists with `POST` request to `/api/verifyUser`.
7. Delete the account via UI.
8. Verify `'ACCOUNT DELETED!'` message and return to Homepage.
9. **API Check #2:** Confirm deleted user no longer exists (expect `"User not found!"`).

---

## Test Data

Dynamic and static data are stored in:  
`/testData/testData.json`

Includes:
- `urls`: Base URL and API endpoints
- `accountMessages`: Expected UI confirmation texts

Randomized data (first/last name, email, password, address, etc.) is generated with `@faker-js/faker`.

---

## Allure Reporting

This test uses **Allure Reporter** for rich reporting.  
Attached in the report:
- Test description, severity, tags, and owner
- Step-by-step execution logs
- API request and response payloads
- Randomized user/account data

---

## Installation

Install dependencies before running the tests:

```bash
npm install
```

---

## Run This Test

Run **all tests** in the suite:

```bash
npx wdio run ./wdio.conf.js
```

Run **only this test case**:

```bash
npm run test:user
```

Generate and open Allure report:

```bash
npm run allure:generate
npm run allure:open
```

---

## File Structure

```
test
├─ pageobjects
│  ├─ components
│  │  └─ navigation.js
│  ├─ account.page.js
│  ├─ login.page.js
│  ├─ main.page.js
│  ├─ page.js
│  └─ signup.page.js
├─ specs
│  └─ verifyUser.test.js
├─ utils
│  └─ postForm.js
└─ testData
   └─ testData.json
```

---

## Notes

- The test cleans up after itself: newly created users are always deleted.  
- API checks ensure consistency between **UI state** and **backend state**.  
