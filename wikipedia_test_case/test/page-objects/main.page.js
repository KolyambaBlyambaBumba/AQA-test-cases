import { Button, Dropdown, Input, Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";

class WikiMainPage extends BasePage {
    constructor() {
        super(new Label('//*[@class="central-textlogo-wrapper"]', 'Wiki Main Page Unique Element'), 'Wiki Main Page');

        this.langSelector = new Dropdown('//*[@id="searchLanguage"]', 'Select Language');
        this.searchInput = new Input('//*[@id="searchInput"]', 'Search Input');
        this.searchButton = new Button('//*[@id="search-form"]//*[@type="submit"]', 'Search Button');
    }

    async selectLanguage(language) {
        await this.langSelector.selectOptionByValue(language, false);
    }

    async setValue(value) {
        await this.searchInput.typeText(value);
    }

    async clickSearchButton() {
        await this.searchButton.click();
    }
}

export default new WikiMainPage();