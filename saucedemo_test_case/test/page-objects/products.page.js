import Page from "./page";

class Products extends Page {
    get uniqueElement() {
        return $('[data-test="title"]');
    }
}

export default new Products();