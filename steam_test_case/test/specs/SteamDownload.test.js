import { assert } from 'chai';
import { downloadDir } from '../../framework/configs/main.wdio.conf.js';
import testData from '../../testData/testData.json' assert { type: "json" };
import SteamPage from '../pageObjects/SteamPage.js';
import ValveAboutPage from '../pageObjects/ValveAboutPage.js';
import SteamAboutPage from '../pageObjects/SteamAboutPage.js';
import Browser from '../../framework/browser/Browser.js';

describe('Steam Download Test', () => {
    it('should link to about tab and check it, return back and link to download page and download setup file', async () => {
        await Browser.openUrl(testData.steamTests.url);

        assert.isTrue(await SteamPage.isPageOpened(), 'Steam page is not displayed');

        await SteamPage.clickValvePageLink();        
        
        await Browser.Window.switchToLastWindow();

        assert.isTrue(await ValveAboutPage.isPageOpened(), 'Valve page is not displayed');

        assert.include(await Browser.getCurrentUrl(), testData.steamTests.valveAboutPageUrl, 'Valve page is not displayed');
        
        await Browser.Window.switchToFirstWindow();

        assert.isTrue(await SteamPage.isPageOpened(), 'Steam page is not displayed');

        await SteamPage.clickInstallSteamButton();

        assert.isTrue(await SteamAboutPage.isPageOpened(), 'Steam about page is not displayed');

        await SteamAboutPage.clickInstallButton();

        assert.isTrue(await Browser.File.isFileExist(downloadDir + testData.steamTests.downlowdFileName), 'File is not downloaded');
    });
});