import { assert } from 'chai';
import testData from '../../testData/testData.json' assert { type: "json" };
import SteamPage from '../pageObjects/SteamPage.js';
import SteamSearchPage from '../pageObjects/SteamSearchPage.js';
import GamePage from '../pageObjects/GamePage.js';
import Browser from '../../framework/browser/Browser.js';

describe('Steam Search Test', () => {
    it('should search for a game', async () => {
        await Browser.openUrl(testData.steamTests.url);
        
        assert.isTrue(await SteamPage.isPageOpened(), 'Steam page is not opened');

        await SteamPage.searchGameAndEnter(testData.steamTests.gameName);
        
        assert.isTrue(await SteamSearchPage.isPageOpened(), 'Steam search page is not opened');
        
        await SteamSearchPage.clickOnChoosedSearchedElement(1);

        assert.isTrue(await GamePage.isPageOpened(), 'Game page is not opened');

        assert.include(await GamePage.getBreadcrumbsText(), testData.steamTests.gameName, 'Breadcrumbs text is not contains game name');
        
        assert.isTrue(await GamePage.isPlayButtonEnabled(), 'Play button is not enabled');
    });
});