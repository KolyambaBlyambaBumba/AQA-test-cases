import { Button, Input, Label } from '../../framework/elements/index.js';
import BasePage from '../../framework/page/BasePage.js';

class LoginPage extends BasePage {
    constructor() {
        super(new Label('//*[@class="signup-form"]//*[text()="New User Signup!"]', 'Account Page Unique Element'), 'Account Page');

        this.nameInput = new Input('//*[@data-qa="signup-name"]', 'Name Input');
        this.emailInput = new Input('//*[@data-qa="signup-email"]', 'Email Input');
        this.signupButton = new Button('//*[@data-qa="signup-button"]', 'Signup Button');
    }

    async fillAndSubmitSignupForm(name, email) {
        await this.nameInput.typeText(name);
        await this.emailInput.typeText(email);
        await this.signupButton.click();
    }
}

export default new LoginPage();