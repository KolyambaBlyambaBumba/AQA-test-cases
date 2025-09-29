import Page from './page.js';

class SignupPage extends Page {
    get uniqueElement() {
        return $('//*[@id="form"]//b[contains(text(),"Enter Account Information")]');
    }

    get inputPassword() {
        return $('//input[@data-qa="password"]');
    }

    get inputFirstName() {
        return $('//input[@data-qa="first_name"]');
    }

    get inputLastName() {
        return $('//input[@data-qa="last_name"]');
    }

    get inputAddress() {
        return $('//input[@data-qa="address"]');
    }

    get selectCountry() {
        return $$('//select[@data-qa="country"]//option');
    }

    get inputState() {
        return $('//input[@data-qa="state"]');
    }

    get inputCity() {
        return $('//input[@data-qa="city"]');
    }

    get inputZipCode() {
        return $('//input[@data-qa="zipcode"]');
    }

    get inputMobileNumber() {
        return $('//input[@data-qa="mobile_number"]');
    }

    get buttonCreateAccount() {
        return $('//button[@data-qa="create-account"]');
    }

    async isPageOpened() {
        return super.isPageOpened(this.uniqueElement);
    }

    async getRandomCountry() {
        const countryOptions = await this.selectCountry;
        const countryCount = await countryOptions.length;
        const randomIndex = Math.floor(Math.random() * countryCount);
        return countryOptions[randomIndex].getText();
    }

    async fillAccountInformation(password, firstName, lastName, address, country, state, city, zipCode, phoneNumber) {
        await this.inputPassword.setValue(password);
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputAddress.setValue(address);
        await this.selectCountry.find(async (elem) => (await elem.getText()) === country).click();
        await this.inputState.setValue(state);
        await this.inputCity.setValue(city);
        await this.inputZipCode.setValue(zipCode);
        await this.inputMobileNumber.setValue(phoneNumber);
    }

    async submitAccountCreation() {
        await this.buttonCreateAccount.click();
    }
}

export default new SignupPage();