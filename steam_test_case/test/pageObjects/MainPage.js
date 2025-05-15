import BasePage from '../../framework/page/BasePage.js'
import { Button, Label } from '../../framework/elements/index.js'

class MainPage extends BasePage {
    constructor() {
        super(new Label('//*[@class="searchbar-content"]', 'Main Page Unique Element'), 'Main Page')

        this.consentButton = new Button('//*[contains(@class, "policy-accept")]', 'Consent Button')
    }

    async acceptConsent() {
        await this.consentButton.click()
    }
}

export default new MainPage()