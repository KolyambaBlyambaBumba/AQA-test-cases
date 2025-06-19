import { assert } from "chai";
import testData from "../../testData/testData.json" assert { type: "json" };
import Browser from "../../framework/browser/Browser.js";
import AllureReporter from "@wdio/allure-reporter";

import MainPage from "../pageObjects/MainPage.js";
import ProductsPage from "../pageObjects/ProductsPage.js";
import CartPage from "../pageObjects/CartPage.js";
import LoginPage from "../pageObjects/LoginPage.js";
import SignupPage from "../pageObjects/SignupPage.js";
import CheckoutPage from "../pageObjects/CheckoutPage.js";
import PaymentPage from "../pageObjects/PaymentPage.js";

describe("Place Order Test", () => {
    it("should place order: register while checkout", async () => {
        AllureReporter.addStep(`Browser opened with URL: ${testData.baseURL}`);
        await Browser.openUrl(testData.baseURL);
        assert.isTrue(await MainPage.isPageOpened(), "Main Page is not opened");

        AllureReporter.addStep("Open Products Page");
        await MainPage.openProductsPage();
        assert.isTrue(await ProductsPage.isPageOpened(), "Products Page is not opened");
        
        AllureReporter.addStep(`Search for item: ${testData.products.tShirtItem}`);
        await ProductsPage.searchProduct(testData.products.tShirtItem);
        await ProductsPage.clickSearchButton();

        AllureReporter.addStep("Click on the first product from the search results");        
        await Browser.executeScript(() => document.querySelectorAll(".adsbygoogle").forEach(ads => ads.remove()));
        await ProductsPage.scroll();

        const firstProductName = await ProductsPage.getChosenProductName();

        await ProductsPage.clickOnChosenProduct();

        AllureReporter.addStep("Click on 'View Cart' button");
        await ProductsPage.clickOnCartModalButton();
        assert.isTrue(await CartPage.isPageOpened(), "Cart Page is not opened");

        AllureReporter.addStep("Click on 'Proceed To Checkout' button");
        await CartPage.clickProceedToCheckout();

        AllureReporter.addStep("Click on 'Register/Login' button in the checkout modal");
        await CartPage.clickCheckoutModalLoginButton();
        assert.isTrue(await LoginPage.isPageOpened(), "Login Page is not opened");

        AllureReporter.addStep("Fill and submit the signup form");
        await LoginPage.fillAndSubmitSignupForm(testData.userData.firstName, testData.userData.email);
        assert.isTrue(await SignupPage.isPageOpened(), "Signup Page is not opened");

        AllureReporter.addStep("Fill account information");
        await SignupPage.selectTitle(testData.userData.title);
        await SignupPage.fillPassword(testData.userData.password);

        AllureReporter.addStep("Fill address information and click 'Create Account' button");
        await Browser.executeScript(() => document.querySelectorAll(".adsbygoogle").forEach(ads => ads.remove()));
        await SignupPage.fillAddressInformation(
            testData.userData.firstName,
            testData.userData.lastName,
            testData.userData.address,
            testData.userData.country,
            testData.userData.state,
            testData.userData.city,
            testData.userData.zipcode,
            testData.userData.mobileNumber
        );
        await SignupPage.clickCreateAccountButton();

        AllureReporter.addStep("Verify account creation");
        const creationTitle = await SignupPage.getCreationTitle();
        assert.strictEqual(creationTitle, testData.accountMessages.accountCreated, `Expected '${testData.accountMessages.accountCreated}' but got '${creationTitle}'`);
    
        AllureReporter.addStep("Click on 'Continue' link");
        await SignupPage.clickContinueLink();
        assert.isTrue(await MainPage.isPageOpened(), "Main Page is not opened after signup");

        AllureReporter.addStep("Verify user is logged in");
        const loggedName = await MainPage.getLoggedName();
        assert.strictEqual(loggedName, testData.userData.firstName, `Expected '${testData.userData.firstName}' but got '${loggedName}'`);

        AllureReporter.addStep("Open Cart Page");
        await MainPage.openCartPage();
        assert.isTrue(await CartPage.isPageOpened(), "Cart Page is not opened after signup");

        AllureReporter.addStep("Click on 'Proceed To Checkout' button on Cart Page");
        await CartPage.clickProceedToCheckout();
        assert.isTrue(await CheckoutPage.isPageOpened(), "Checkout Page is not opened");

        AllureReporter.addStep("Verify address details and billing details on Checkout Page");
        const deliveryAddressDetails = await CheckoutPage.getDeliveryAddressElements();
        const billingAddressDetails = await CheckoutPage.getBillingAddressElements();

        const filteredDelivery = deliveryAddressDetails.filter(line => line.trim() !== '');
        const filteredBilling = billingAddressDetails.filter(line => line.trim() !== '');

        const {firstName, lastName, address, mobileNumber} = testData.userData;
        const valuesToCheck = [firstName, lastName, address, mobileNumber];

        valuesToCheck.forEach(value => {
            const inDelivery = filteredDelivery.some(line => line.includes(value));
            const inBilling = filteredBilling.some(line => line.includes(value));

            assert.isTrue(inDelivery, `Value '${value}' not found in delivery address details`);
            assert.isTrue(inBilling, `Value '${value}' not found in billing address details`);
        });    

        AllureReporter.addStep("Review order details on Checkout Page");
        const orderProductNames = await CheckoutPage.getOrderProductNames();
        assert.include(orderProductNames, firstProductName, `Expected product '${firstProductName}' to be in the order list`);

        AllureReporter.addStep("Fill order description and click 'Place Order'");
        await CheckoutPage.fillOrderDescription(testData.orderDescription);
        await CheckoutPage.clickPlaceOrder();
        assert.isTrue(await PaymentPage.isPageOpened(), "Payment Page is not opened");

        AllureReporter.addStep("Fill payment details on Payment Page and submit");
        await PaymentPage.fillPaymentDetailsAndSubmit(
            testData.userData.firstName + " " + testData.userData.lastName,
            testData.paymentDetails.cardNumber,
            testData.paymentDetails.cvc,
            testData.paymentDetails.expirationMonth,
            testData.paymentDetails.expirationYear
        );
        
        AllureReporter.addStep("Verify order success message");
        const successMessage = await PaymentPage.getSuccessMessage();
        assert.strictEqual(successMessage, testData.successMessages.orderPlaced, `Expected '${testData.successMessages.orderPlaced}' but got '${successMessage}'`);

        AllureReporter.addStep("Click on 'Delete Account' link and check deletion message");
        await PaymentPage.clickDeleteAccountLink();
        const accountDeletedMessage = await PaymentPage.getAccountDeletedMessage();
        assert.strictEqual(accountDeletedMessage, testData.accountMessages.accountDeleted, `Expected '${testData.accountMessages.accountDeleted}' but got '${accountDeletedMessage}'`);

        AllureReporter.addStep("Click on 'Continue' link after account deletion");
        await PaymentPage.clickContinueLink();
        assert.isTrue(await MainPage.isPageOpened(), "Main Page is not opened after account deletion");
    });
});
