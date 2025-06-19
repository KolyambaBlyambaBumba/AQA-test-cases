## Test Overview

---

### Download PDF File Test

**Feature File:** `download.steps.js`

**Steps:**
1. Open the Wikipedia homepage.
2. Enter “Albert Einstein” into the search field.
3. Click the search button.
4. Verify the search results page is displayed.
5. Click the “Tools” menu.
6. Click “Download as PDF.”
7. Verify the PDF download page opens.
8. Get the expected filename for the PDF.
9. Click the “Download” button.
10. Validate that the correct `.pdf` file is downloaded.

---

### Check Information Test

**Feature File:** `information.steps.js`

**Steps:**
1. Open the Wikipedia homepage.
2. Enter “Bengal tiger” into the search field.
3. Click the search button.
4. Confirm that the search results page is displayed.
5. Open the “Tools” menu.
6. Click “Page information.”
7. Verify that the information page is correctly opened.

---

### Change Language Test

**Feature File:** `language.steps.js`

**Steps:**
1. Open the Wikipedia homepage.
2. Switch the language to Spanish.
3. Enter “Gabriel García Márquez” into the search field.
4. Click the search button.
5. Ensure that the search results page is displayed and matches the selected language.

---

## Test Data

- Static values are directly included in feature files.
- All dynamic data is stored in `testData/testData.json`.
- Downloaded files are checked in the path defined in `downloadDir` from `main.wdio.conf.js`.

## Running Tests

```bash
npm run test:download
npm run test:info
npm run test:lang

npm run chrome.cucumber