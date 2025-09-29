export default class Page {
    async isPageOpened(uniqueElement, timeout = 5000) {
        await uniqueElement.waitForDisplayed({ timeout });
        return uniqueElement.isDisplayed();
    }

    open(path) {
        return browser.url(`${path}`);
    }
}