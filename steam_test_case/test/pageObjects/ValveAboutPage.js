import { Label } from "../../framework/elements/Label.js";
import BasePage from "../../framework/page/BasePage.js";

class ValveAboutPage extends BasePage {
    constructor() {
        super(new Label('//div[@id="content"]', 'Valve About Page Unique Element'), 'Valve About Page');
    }
}

export default new ValveAboutPage();