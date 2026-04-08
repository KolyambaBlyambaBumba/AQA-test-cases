import Page from "./page";

class Products extends Page {
    get uniqueElement() { return $('[data-test="title"]'); }

    get menuButton() { return $('#react-burger-menu-btn'); }

    get logoutButton() { return $('[data-test="logout-sidebar-link"]'); }

    get productSortDropdown() { return $$('[data-test="product-sort-container"] option'); }

    get productItems() { return $$('[data-test="inventory-item"]'); }

    get cartBadge() { return $('[data-test="shopping-cart-badge"]'); }

    get cartIcon() { return $('[data-test="shopping-cart-link"]'); }

    async clickMenuButton() {
        await this.menuButton.click();
    }

    async clickLogoutButton() {
        await this.logoutButton.click();
    }

    async selectProductSortOption(optionText) {
        await this.productSortDropdown.find(async (elem) => (await elem.getText()) === optionText).click();
    }

    async addProductToCartByProductNumber(index) {
        const items = await this.productItems;

        if (index >= items.length) {
            throw new Error(`Index ${index} out of bounds. Total items: ${items.length}`);
        }

        const item = items[index - 1];

        const name = await item.$('[data-test="inventory-item-name"]').getText();
        await item.$('button[data-test^="add-to-cart-"]').click();

        return name;
    }

    async getCartBadgeCount() {
        return this.cartBadge.getText();
    }

    async clickCartIcon() {
        await this.cartIcon.click();
    }
}

export default new Products();