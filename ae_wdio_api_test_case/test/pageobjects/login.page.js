import Page from './page.js';

class LoginPage extends Page {
    get uniqueElement() {
        return $('//*[@id="form"]//h2[contains(text(),"New User Signup")]');
    }

    get inputUsername() {
        return $('//input[@data-qa="signup-name"]');
    }

    get inputEmail() {
        return $('//input[@data-qa="signup-email"]');
    }

    get buttonSignup() {
        return $('//button[@data-qa="signup-button"]');
    }

    async isPageOpened() {
        return super.isPageOpened(this.uniqueElement);
    }

    async signupNewUser(firstName, lastName, email) {
        await this.inputUsername.setValue(firstName + ' ' + lastName);
        await this.inputEmail.setValue(email);
    }

    async submitSignup() {
        await this.buttonSignup.click();
    }
}

export default new LoginPage();