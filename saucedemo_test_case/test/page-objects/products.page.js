import Page from "./page";

class Products extends Page {
    get uniqueElement() {
        return $('//*[@data-test="title"]');
    }

    async isPageOpened() {
        return super.isPageOpened(this.uniqueElement);
    }
}

export default new Products();