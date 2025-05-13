import { Given, When, Then } from '@wdio/cucumber-framework';

import { assert } from 'chai';

import testData from '../../testData/testData.json' assert { type: "json" };
import Browser from '../../framework/browser/Browser.js';
import WikiMainPage from '../page-objects/main.page.js';
import SearchedPersonPage from '../page-objects/searched.page.js';
import AllureReporter from '@wdio/allure-reporter';

Given('I am on Wikipedia.org homepage', async function () {
    AllureReporter.addStep(`Open URL: ${testData.startUrl}`);
    assert.strictEqual(await Browser.getCurrentUrl(), testData.startUrl, 'URL is not correct');
    AllureReporter.addStep('Check Wiki Main Page is opened');
    assert.isTrue(await WikiMainPage.isPageOpened(), 'Wiki Main Page is not opened');
});

When('I input {string} in the search field', async function (text) {
    AllureReporter.addStep(`Input text: ${text}`);
    await WikiMainPage.setValue(text);
});

When('I click the search button', async function () {
    AllureReporter.addStep('Click the search button');
    await WikiMainPage.clickSearchButton();
});

Then('I should link to search results page', async function () {
    AllureReporter.addStep('Check Searched Person Page is opened');
    assert.isTrue(await SearchedPersonPage.isPageOpened(), 'Searched Person Page is not opened');
});

When('I click the tools button', async function () {
    AllureReporter.addStep('Click the tools menu button');
    await SearchedPersonPage.clickToolsMenu();
});