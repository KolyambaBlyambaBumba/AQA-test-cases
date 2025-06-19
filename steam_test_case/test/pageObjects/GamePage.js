import { Label } from "../../framework/elements/Label.js";
import BasePage from "../../framework/page/BasePage.js";

class GamePage extends BasePage {
    constructor() {
        super(new Label('//*[@id="appHubAppName"]', 'Game Page Unique Element'), 'Game Page');
        
        this.breadcrumbs = new Label('//div[@class="breadcrumbs"]', 'Breadcrumbs');
        this.playButton = new Label('//a[contains(@class, "btn_green_steamui")]', 'Play Button');
    }

    async getBreadcrumbsText() {
        return this.breadcrumbs.getText();
    }

    async isPlayButtonEnabled() {
        return this.playButton.state().isEnabled();
    }
}

export default new GamePage();