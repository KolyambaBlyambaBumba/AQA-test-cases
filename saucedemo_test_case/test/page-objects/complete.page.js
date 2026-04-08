import Page from "./page.js";

class Complete extends Page {
    get cartBadge() { return $('[data-test="shopping-cart-badge"]'); }

    get backHomeButton() { return $('[data-test="back-to-products"]'); }

    async isCartBadgeDisplayed() {
        return this.cartBadge.isDisplayed();
    }

    async clickBackHomeButton() {
        await this.backHomeButton.click();
    }
}

export default new Complete();