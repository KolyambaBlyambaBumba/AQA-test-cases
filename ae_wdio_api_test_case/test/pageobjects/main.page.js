import Page from './page.js';

class MainPage extends Page {
    get uniqueElement() {
        return $('//*[@id="slider-carousel"]');
    }

    open() {
        return super.open('/'); 
    }

    async isPageOpened() {
        return super.isPageOpened(this.uniqueElement);
    }
}

export default new MainPage();