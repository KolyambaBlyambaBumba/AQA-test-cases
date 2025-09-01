import { Input, Label } from '../../framework/elements/index.js'
import BasePage from "../../framework/page/BasePage.js";
import Browser from "../../framework/browser/Browser.js";

class SteamPage extends BasePage {
    constructor() {
        super(new Label('//*[@id="logo_holder"]', 'Steam Page Unique Element'), 'Steam Page');

        this.searchInput = new Input('//input[@id="store_nav_search_term"]', 'Search Input');
        this.aboutLink = new Label('//div[@class="content"]//a[contains(text(), "About")]', 'About Link');
        this.valvePageLink = new Label(`//a[text()="About Valve"]`, 'Valve Page Link');
        this.installSteamButton = new Label('//*[contains(@class, "header_installsteam_btn_green")]', 'Install Steam Button');
    }

    async searchGameAndEnter(gameName) {
        await this.searchInput.typeText(gameName);
        await Browser.pressKeys('Enter');
    }

    async clickAboutLink() {
        await this.aboutLink.click();
    }

    async clickValvePageLink() {
        await this.valvePageLink.click();
    }

    async clickInstallSteamButton() {
        await this.installSteamButton.click();
    }
}

export default new SteamPage();