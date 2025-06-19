import { Label } from '../../framework/elements/index.js';
import BasePage from '../../framework/page/BasePage.js';

class CartPage extends BasePage {
    constructor() {
        super(new Label('//*[@class="breadcrumb"]//li[text()="Shopping Cart"]', 'Cart Page Unique Element'), 'Cart Page');

        this.proceedToCheckoutLink = new Label('//a[text()="Proceed To Checkout"]', 'Proceed To Checkout Button');
        this.checkoutModalLoginButton = new Label('//*[@id="checkoutModal"]//a[@href="/login"]', 'Checkout Modal Login Button');
    }

    async clickProceedToCheckout() {
        await this.proceedToCheckoutLink.click();
    }

    async clickCheckoutModalLoginButton() {
        await this.checkoutModalLoginButton.click();
    }
}

export default new CartPage();