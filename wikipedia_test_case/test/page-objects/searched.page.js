import { Button, Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";

class SearchedPersonPage extends BasePage {
    constructor() {
        super(new Label('//*[@id="firstHeading"]', 'Searched Person Page Unique Element'), 'Searched Person Page');

        this.toolsMenu = new Label('//*[@id="vector-page-tools-dropdown"]', 'Tools Menu');
        this.toolsDownloadPdfButton = new Button('//*[@id="coll-download-as-rl"]//a', 'Download Button');
        this.toolsPageInfoButton = new Button('//*[@id="t-info"]/a', 'Page Info Button');
    }

    async clickToolsMenu() {
        await this.toolsMenu.click();
    }

    async clickDownloadPdfButton() {
        await this.toolsDownloadPdfButton.click();
    }

    async clickPageInfoButton() {
        await this.toolsPageInfoButton.click();
    }
}

export default new SearchedPersonPage();