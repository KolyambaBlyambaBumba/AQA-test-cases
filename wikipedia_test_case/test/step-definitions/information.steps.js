import { Then, When } from '@wdio/cucumber-framework';

import { assert } from 'chai';

import SearchedPersonPage from '../page-objects/searched.page.js';
import InformationPage from '../page-objects/information.page.js';
import AllureReporter from '@wdio/allure-reporter';

When('I click the page information link', async function () {
    AllureReporter.addStep('Click the page information button');
    await SearchedPersonPage.clickPageInfoButton();
});

Then('I should link to information page', async function () {
    AllureReporter.addStep('Check Information Page is opened');
    assert.isTrue(await InformationPage.isPageOpened(), 'Information Page is not opened');
});