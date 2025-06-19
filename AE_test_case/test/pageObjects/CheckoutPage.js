import { ElementsList, Input, Label } from '../../framework/elements/index.js';
import BasePage from '../../framework/page/BasePage.js';

class CheckoutPage extends BasePage {
    constructor() {
        super(new Label('//*[@class="breadcrumb"]//li[text()="Checkout"]', 'Checkout Page Unique Element'), 'Checkout Page');

        this.deliveryAddressList = new ElementsList(Label, '//*[@id="address_delivery"]//li', 'Delivery Address List');
        this.billingAddressList = new ElementsList(Label, '//*[@id="address_invoice"]//li', 'Billing Address List');
        this.orderNamesList = new ElementsList(Label, '//*[@id="cart_info"]//*[@class="cart_description"]//h4', 'Order List');
        this.descriptionArea = new Input('//*[@id="ordermsg"]//textarea', 'Order Description Area');
        this.placeOrderLink = new Label('//*[@id="cart_items"]//a[@href="/payment"]', 'Place Order Link');
    }

    async getDeliveryAddressElements() {
        const elements = await this.deliveryAddressList.getListOfElements();
        return Promise.all(elements.map(el => el.getText()));
    }

    async getBillingAddressElements() {
        const elements = await this.billingAddressList.getListOfElements();
        return Promise.all(elements.map(el => el.getText()));
    }

    async getOrderProductNames() {
        const elements = await this.orderNamesList.getListOfElements();
        return Promise.all(elements.map(el => el.getText()));
    }

    async fillOrderDescription(description) {
        await this.descriptionArea.typeText(description);
    }

    async clickPlaceOrder() {
        await this.placeOrderLink.click();
    }
}
    
export default new CheckoutPage();