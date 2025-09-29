import Page from "./page.js";

class AccountPage extends Page {
    get successCreationMessage() {
        return $('//*[@data-qa="account-created"]');
    }

    get successDeletionMessage() {
        return $('//*[@data-qa="account-deleted"]');
    }

    get continueLink() {
        return $('//a[@data-qa="continue-button"]');
    }

    async getSuccessCreationMessage() {
        return this.successCreationMessage;
    }

    async getSuccessDeletionMessage() {
        return this.successDeletionMessage;
    }

    async clickContinueLink() {
        await this.continueLink.click();
    }
}

export default new AccountPage();
