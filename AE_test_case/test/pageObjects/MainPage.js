import { Label } from '../../framework/elements/index.js';
import BasePage from '../../framework/page/BasePage.js';

class MainPage extends BasePage {
    constructor() {
        super(new Label('//*[@id="slider"]', 'Main Page Unique Element'), 'Main Page');

        this.productsPageLink = new Label('//*[@id="header"]//a[@href="/products"]', 'Products Page Link'); 
        this.cartPageLink = new Label('//*[@id="header"]//a[@href="/view_cart"]', 'Cart Page Link');
        this.loggedName = new Label('//*[@id="header"]//*[contains(text(),"Logged in as")]//b', 'Logged Name');   
    }

    async openProductsPage() {
        await this.productsPageLink.click();
    }

    async openCartPage() {
        await this.cartPageLink.click();
    }

    async getLoggedName() {
        return this.loggedName.getText();
    }
}

export default new MainPage();