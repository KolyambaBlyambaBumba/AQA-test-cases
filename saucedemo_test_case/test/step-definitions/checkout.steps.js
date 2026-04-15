import { When, Then } from '@wdio/cucumber-framework';

import AllureReporter from '@wdio/allure-reporter';

import Products from '../page-objects/products.page.js';
import Cart from '../page-objects/cart.page.js';
import Information from '../page-objects/information.page.js';
import Overview from '../page-objects/overview.page.js';
import Complete from '../page-objects/complete.page.js';

When('User sort products by {string}', async (option) => {
    await Products.selectProductSortOption(option);
});

When('User add product number {int} from the product list to the cart', async function (productNumber) {
    if (!this.addedProducts) {
        this.addedProducts = [];
    }

    const product = await Products.addProductToCartByProductNumber(productNumber);
    this.addedProducts.push(product);
    AllureReporter.addAttachment('Added Product name', product.name, 'text/plain');
    AllureReporter.addAttachment('Added Product price', product.price, 'text/plain');
});

Then('User should see {string} in the cart badge', async (expectedCount) => {
    const cartBadgeCount = await Products.getCartBadgeCount();
    expect(cartBadgeCount).toBe(expectedCount);
});

When('User click the cart icon', async () => {
    await Products.clickCartIcon();
});

Then('User should be redirected to the Cart: {string} page', async (expectedTitle) => {
    const actualTitle = await Cart.getUniqueElementText();
    expect(actualTitle).toBe(expectedTitle);
});

Then('User should see {int} products in the cart', async (expectedCount) => {
    const actualCount = await Cart.getCartItemAmount();
    expect(actualCount).toBe(expectedCount);
});

Then('User should see selected products in the cart', async function () {
    const cartItems = await Cart.getCartItems();

    for (const expected of this.addedProducts) {
        expect(cartItems).toContainEqual(expected);
    }
});

When('User click the checkout button', async () => {
    await Cart.clickCheckoutButton();
});

Then('User should be redirected to the {string} page', async (expectedTitle) => {
    const pages = [Information, Overview, Complete];

    for (const page of pages) {
        const actualTitle = await page.getUniqueElementText();
        if (actualTitle === expectedTitle) {
            expect(actualTitle).toBe(expectedTitle);
            return;
        }
    }

    throw new Error(`Page with title "${expectedTitle}" not found among the expected pages.`);
});

When('User enter first name {string}, last name {string} and postal code {string}', async (firstName, lastName, postalCode) => {
    await Information.setCheckoutInformation(firstName, lastName, postalCode);
});

When('User click the continue button', async () => {
    await Information.clickContinueButton();
});

Then('User should see payment information {string}', async (expectedPaymentInfo) => {
    const paymentInfo = await Overview.getPaymentInformation();
    expect(paymentInfo).toBe(expectedPaymentInfo);
});

Then('User should see shipping information {string}', async (expectedShippingInfo) => {
    const shippingInfo = await Overview.getShippingInformation();
    expect(shippingInfo).toBe(expectedShippingInfo);
});

Then('User should see correct item price, tax > 0 and correct total', async function () {
    const itemTotal = await Overview.getItemTotal();
    const tax = await Overview.getTax();
    const total = await Overview.getTotal();
    const expectedTotal = itemTotal + tax;

    expect(itemTotal).toBe(this.addedProducts.reduce((sum, product) => sum + parseFloat(product.price.replace('$', '')), 0));
    expect(tax).toBeGreaterThan(0);
    expect(total).toBe(expectedTotal);
});

When('User click the finish button', async () => {
    await Overview.clickFinishButton();
});

Then('User shouldn\'t see the cart badge quantity', async () => {
    const isCartBadgeDisplayed = await Complete.isCartBadgeDisplayed();
    expect(isCartBadgeDisplayed).toBe(false);
});

When('User click the back home button', async () => {
    await Complete.clickBackHomeButton();
});
