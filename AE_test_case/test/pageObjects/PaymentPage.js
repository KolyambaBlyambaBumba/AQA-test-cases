import { Button, Input, Label } from '../../framework/elements/index.js';
import BasePage from '../../framework/page/BasePage.js';

class PaymentPage extends BasePage {
    constructor() {
        super(new Label('//*[@class="breadcrumb"]//li[text()="Payment"]', 'Payment Page Unique Element'), 'Payment Page');

        this.nameOnCardInput = new Input('//*[@data-qa="name-on-card"]', 'Name on Card Input');
        this.cardNumberInput = new Input('//*[@data-qa="card-number"]', 'Card Number Input');
        this.cvcInput = new Input('//*[@data-qa="cvc"]', 'CVC Input');
        this.expirationMonthInput = new Input('//*[@data-qa="expiry-month"]', 'Expiration Month Input');
        this.expirationYearInput = new Input('//*[@data-qa="expiry-year"]', 'Expiration Year Input');
        this.payButton = new Button('//*[@data-qa="pay-button"]', 'Pay Button');
        this.successMessage = new Label('//*[@id="form"]//p', 'Success Message');
        this.deleteAccountLink = new Label('//*[@id="header"]//a[@href="/delete_account"]', 'Delete Account Link');
        this.accountDeletedMessage = new Label('//*[@data-qa="account-deleted"]', 'Account Deleted Message');
        this.continueLink = new Label('//*[@data-qa="continue-button"]', 'Continue Link');
    }

    async fillPaymentDetailsAndSubmit(name, cardNumber, cvc, month, year) {
        await this.nameOnCardInput.typeText(name);
        await this.cardNumberInput.typeText(cardNumber);
        await this.cvcInput.typeText(cvc);
        await this.expirationMonthInput.typeText(month);
        await this.expirationYearInput.typeText(year);
        await this.payButton.click();
    }

    async getSuccessMessage() {
        return this.successMessage.getText();
    }

    async clickDeleteAccountLink() {
        await this.deleteAccountLink.click();
    }

    async getAccountDeletedMessage() {
        return this.accountDeletedMessage.getText();
    }

    async clickContinueLink() {
        await this.continueLink.click();
    }
}

export default new PaymentPage();