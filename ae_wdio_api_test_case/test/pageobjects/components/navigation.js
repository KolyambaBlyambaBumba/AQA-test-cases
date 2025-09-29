class Navigation {
    constructor(root = '//*[@id="header"]//ul//a') {
        this.root = root;
    }

    get links() {
        return $$(this.root);
    }

    async clickLinkByHref(href) {
        const link = await $(`${this.root}[contains(@href,"${href}")]`);
        await link.click();
    }
}

export default new Navigation();
