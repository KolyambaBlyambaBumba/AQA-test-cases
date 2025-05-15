import { Button, Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";

class DownloadPage extends BasePage {
    constructor() {
        super(new Label('//*[@id="firstHeading"]', 'Download Page Unique Element'), 'Download Page');

        this.fileNameFromElement = new Label('//*[contains(@class, "label-desc")]', 'File Name From Element');
        this.downloadButton = new Button('//*[@type="submit"]', 'Download Button');
    }

    async getFileNameFromElement() {
        return this.fileNameFromElement.getText();
    }

    async clickDownloadButton() {
        await this.downloadButton.click();
    }
}

export default new DownloadPage();