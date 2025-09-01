## Test Overview

---

### Steam Search Test

**Test File:** `SteamSearch.test.js`

**Steps:**
1. Open the Steam homepage.
3. Enter a game name into the search field and press Enter.
4. Confirm the search results page is displayed.
5. Click on the second game from the results.
6. Ensure the game’s detail page is opened.
7. Check that the breadcrumbs contain the correct game name.
8. Verify that the “Play” button is enabled.

---

### Steam About Page Test

**Test File:** `SteamAbout.test.js`

**Steps:**
1. Open the Steam homepage.
2. Verify the page is fully loaded.
3. Click the "About" link.
4. Confirm the About page is opened.
5. Verify that the “Play” button is visible.
6. Compare the online players vs. players currently in-game — online should be greater.
7. Navigate back to the homepage.
8. Ensure the homepage is loaded again.

---

### Steam Download Test

**Test File:** `SteamDownload.test.js`

**Steps:**
1. Open the Steam homepage.
2. Verify the page is loaded.
3. Click the “About Valve” link.
4. Switch to the newly opened window.
5. Verify the Valve About page is opened.
6. Assert that the URL matches the expected Valve URL.
7. Switch back to the original Steam window.
8. Click the “Install Steam” button.
9. Verify the Steam download page is displayed.
10. Click the “Install” button to trigger the download.
11. Confirm the `.exe` installer is downloaded to the target folder.

---

## Test Data

- All dynamic data is stored in `testData/testData.json`.
- Downloaded files are checked in the path defined in `downloadDir` from `main.wdio.conf.js`.

## Running Tests

```bash
npm run test:search
npm run test:about
npm run test:download

npm run chrome.mocha