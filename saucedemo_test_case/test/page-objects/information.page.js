import Page from './page.js';

class Information extends Page {
    get uniqueElement() { return $('[data-test="title"]'); }
    
    get firstNameInput() { return $('[data-test="firstName"]'); }

    get lastNameInput() { return $('[data-test="lastName"]'); }

    get postalCodeInput() { return $('[data-test="postalCode"]'); }

    get continueButton() { return $('[data-test="continue"]'); }

    async setCheckoutInformation(firstName, lastName, postalCode) {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.postalCodeInput.setValue(postalCode);
    }

    async clickContinueButton() {
        await this.continueButton.click();
    }
}

export default new Information();