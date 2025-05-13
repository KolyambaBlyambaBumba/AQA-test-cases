import { Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";

class InformationPage extends BasePage {
    constructor() {
        super(new Label('//*[@id="mw-pageinfo-display-title"]', 'Information Page Unique Element'), 'Information Page');
    }
}

export default new InformationPage();