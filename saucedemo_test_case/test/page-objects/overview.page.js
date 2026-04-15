import Page from './page.js';

class Overview extends Page {
    get uniqueElement() { return $('[data-test="title"]'); }

    get cartItems() { return $$('[data-test="inventory-item"]'); }

    get paymentInfo() { return $('[data-test="payment-info-value"]'); }

    get shippingInfo() { return $('[data-test="shipping-info-value"]'); }

    get itemTotal() { return $('[data-test="subtotal-label"]'); }

    get tax() { return $('[data-test="tax-label"]'); }

    get total() { return $('[data-test="total-label"]'); }

    get finishButton() { return $('[data-test="finish"]'); }

    async getUniqueElementText() {
        return this.uniqueElement.getText();
    }

    async getCartItemAmount() {
        return this.cartItems.length;
    }

    async getPaymentInformation() {
        return this.paymentInfo.getText();
    }

    async getShippingInformation() {
        return this.shippingInfo.getText();
    }

    async getItemTotal() {
        const text = await this.itemTotal.getText();
        return parseFloat(text.replace('Item total: $', ''));
    }

    async getTax() {
        const text = await this.tax.getText();
        return parseFloat(text.replace('Tax: $', ''));
    }

    async getTotal() {
        const text = await this.total.getText();
        return parseFloat(text.replace('Total: $', ''));
    }

    async clickFinishButton() {
        await this.finishButton.click();
    }
}

export default new Overview();
