import Page from "./page.js";

class Complete extends Page {
    get uniqueElement() { return $('[data-test="title"]'); }

    get cartBadge() { return $('[data-test="shopping-cart-badge"]'); }

    get backHomeButton() { return $('[data-test="back-to-products"]'); }

    async getUniqueElementText() {
        return this.uniqueElement.getText();
    }

    async isCartBadgeDisplayed() {
        return this.cartBadge.isDisplayed();
    }

    async clickBackHomeButton() {
        await this.backHomeButton.click();
    }
}

export default new Complete();
