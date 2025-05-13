import { assert } from 'chai';
import SteamPage from '../pageObjects/SteamPage.js';
import SteamAboutPage from '../pageObjects/SteamAboutPage.js';
import testData from '../../testData/testData.json' assert { type: "json" };
import Browser from '../../framework/browser/Browser.js';

describe('Steam About Page Test', () => {
    it('should link to about page, check install button and compare online and playing and back to main page', async () => {
        await Browser.openUrl(testData.steamTests.url);

        await SteamPage.clickAboutLink();

        assert.isTrue(await SteamAboutPage.isPageOpened(), 'Steam About page is not opened');

        assert.isTrue(await SteamAboutPage.isPlayButtonDisplayed(), 'Play button is not displayed');

        assert.isAbove(await SteamAboutPage.getGameStatOnline(), await SteamAboutPage.getGameStatPlayingNow(), 'Online players is not greater than players playing now');
        
        await Browser.Window.back()

        assert.isTrue(await SteamPage.isPageOpened(), 'Steam page is not opened');
    });
});