import { Button, ElementsList, Input, Label } from '../../framework/elements/index.js';
import BasePage from '../../framework/page/BasePage.js';
import Browser from '../../framework/browser/Browser.js';

class ProductsPage extends BasePage {
    constructor() {
        super(new Label('//*[@id="sale_image"]', 'Products Page Unique Element'), 'Products Page');

        this.searchInput = new Input('//*[@id="search_product"]', 'Search Input');
        this.searchButton = new Button('//*[@id="submit_search"]', 'Search Button');
        this.productsContainer = new Label('//*[@class="single-products"]', 'Products Container');
        this.allSearchedProductsNames = new ElementsList(Label, '//*[@class="overlay-content"]//p', 'All Searched Products Names'); 
        this.allSearchedProducts = new ElementsList(Label, '//*[@class="overlay-content"]//a[contains(text(),"Add to cart")]', 'All Searched Products');
        this.cartModalLink = new Label('//*[@id="cartModal"]//a[@href="/view_cart"]', 'Cart Modal');
    }

    async searchProduct(productName) {
        await this.searchInput.typeText(productName);
    }

    async clickSearchButton() {
        await this.searchButton.click();
    }

    async scroll() {
        await this.productsContainer.moveTo();
        await Browser.executeScript(() => window.scrollBy(0, 300));
    }

    async getChosenProductName(index = 0) {
        const elements = await this.allSearchedProductsNames.getListOfElements();
        return elements[index].getText();
    }

    async clickOnChosenProduct(index = 0) {
        const element = await this.allSearchedProducts.getListOfElements();
        await element[index].click();
    }

    async clickOnCartModalButton() {
        await this.cartModalLink.click();
    }
}

export default new ProductsPage();