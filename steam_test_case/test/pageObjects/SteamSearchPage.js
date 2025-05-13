import { ElementsList } from "../../framework/elements/ElementsList.js";
import { Label } from "../../framework/elements/Label.js";
import BasePage from "../../framework/page/BasePage.js";

class SteamSearchPage extends BasePage {
    constructor() {
        super(new Label('//div[@class="searchbar"]', 'Steam Search Page Unique Element'), 'Steam Search Page');
        
        this.allSearchedElements = new ElementsList(Label, '//div[contains(@class, "search_capsule")]', 'All Searched Elements');
    }

    async clickOnChoosedSearchedElement(index = 0) {        
        const element = await this.allSearchedElements.getListOfElements()
        await element[index].click()
    }
}

export default new SteamSearchPage();