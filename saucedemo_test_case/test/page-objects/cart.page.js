import Page from './page.js';

class Cart extends Page {
    get uniqueElement() { return $('[data-test="title"]'); }

    get cartItems() { return $$('[data-test="inventory-item"]'); }

    get checkoutButton() { return $('[data-test="checkout"]'); }

    async getUniqueElementText() {
        return this.uniqueElement.getText();
    }

    async getCartItemAmount() {
        return this.cartItems.length;
    }

    async getCartItems() {
        const items = await this.cartItems;

        return items.map(async (item) => {
            const name = await item.$('[data-test="inventory-item-name"]').getText();
            const price = await item.$('[data-test="inventory-item-price"]').getText();
            return { name, price };
        })
    }

    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }
}

export default new Cart();
