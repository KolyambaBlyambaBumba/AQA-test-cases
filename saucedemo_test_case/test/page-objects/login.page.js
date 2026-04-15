import Page from './page.js';

class Login extends Page {
    get uniqueElement() { return $('.login_logo'); }

    get usernameInput() { return $('[data-test="username"]'); }

    get passwordInput() { return $('[data-test="password"]'); }

    get loginButton() { return $('[data-test="login-button"]'); }
    
    get errorMessage() { return $('[data-test="error"]'); }

    open() {
        return super.open('/');
    }

    async setCredentials(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return this.errorMessage.getText();
    }
}

export default new Login();