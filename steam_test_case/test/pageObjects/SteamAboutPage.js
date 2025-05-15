import { Label } from '../../framework/elements/index.js'
import BasePage from "../../framework/page/BasePage.js";

class SteamAboutPage extends BasePage {
    constructor() {
        super(new Label('//div[@id="about_greeting"]', 'Steam Page Unique Element'), 'Steam Page');

        this.installButton = new Label('//div[@id="about_greeting"]//a[@class="about_install_steam_link"]', 'Install Steam Button');
        this.gameStatOnline = new Label('//div[@class="online_stat"][1]', 'Online Players Label');
        this.gameStatPlayingNow = new Label('//div[@class="online_stat"][2]', 'Players Playing Now Label');
    }

    async isPlayButtonDisplayed() {
        return this.installButton.state().isDisplayed();
    }

    async getGameStatOnline() {
        return parseInt((await this.gameStatOnline.getText()).replace(/\D+/g, ""));
    }

    async getGameStatPlayingNow() {
        return parseInt((await this.gameStatPlayingNow.getText()).replace(/\D+/g, ""));
    }

    async clickInstallButton() {
        await this.installButton.click();
    }
}

export default new SteamAboutPage();