import { Button, Dropdown, ElementsList, Input, Label } from '../../framework/elements/index.js';
import BasePage from '../../framework/page/BasePage.js';

class SignupPage extends BasePage {
    constructor() {
        super(new Label('//*[@class="login-form"]//*[text()="Enter Account Information"]', 'Signup Page Unique Element'), 'Signup Page');

        this.titleInputsList = new ElementsList(Input, '//*[@class="clearfix"]//*[@class="radio-inline"]//input[@type="radio"]', 'Title Inputs List'); 
        this.passwordInput = new Input('//*[@data-qa="password"]', 'Password Input');
        this.firstNameInput = new Input('//*[@data-qa="first_name"]', 'First Name Input');
        this.lastNameInput = new Input('//*[@data-qa="last_name"]', 'Last Name Input');
        this.addressInput = new Input('//*[@data-qa="address"]', 'Address Input');
        this.countrySelect = new Dropdown('//*[@data-qa="country"]', 'Country Select');
        this.stateInput = new Input('//*[@data-qa="state"]', 'State Input');
        this.cityInput = new Input('//*[@data-qa="city"]', 'City Input');
        this.zipcodeInput = new Input('//*[@data-qa="zipcode"]', 'Zipcode Input');
        this.mobileNumberInput = new Input('//*[@data-qa="mobile_number"]', 'Mobile Number Input');
        this.createAccountButton = new Button('//*[@data-qa="create-account"]', 'Create Account Button');
        this.creationTitle = new Label('//*[@data-qa="account-created"]', 'Created Account Title');
        this.continueLink = new Label('//*[@data-qa="continue-button"]', 'Continue Link Button');
    }

    async selectTitle(title) {
        const elements = await this.titleInputsList.getListOfElements();

        for (const el of elements) {
            if (await el.getValue() === title) {
                return el.click();
            }
        }
    }

    async fillPassword(password) {
        await this.passwordInput.typeText(password);
    }

    async fillAddressInformation(firstName, lastName, address, country, state, city, zipcode, mobileNumber) {
        await this.firstNameInput.typeText(firstName);
        await this.lastNameInput.typeText(lastName);
        await this.addressInput.typeText(address);
        await this.countrySelect.selectOptionByText(country);
        await this.stateInput.typeText(state);
        await this.cityInput.typeText(city);
        await this.zipcodeInput.typeText(zipcode);
        await this.mobileNumberInput.typeText(mobileNumber);
    }

    async clickCreateAccountButton() {
        await this.createAccountButton.click();
    }

    async getCreationTitle() {
        return this.creationTitle.getText();
    }

    async clickContinueLink() {
        await this.continueLink.click();
    }
}

export default new SignupPage();