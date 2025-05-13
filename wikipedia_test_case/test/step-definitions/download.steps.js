import { Then, When } from '@wdio/cucumber-framework';

import { assert } from 'chai';
import { downloadDir } from '../../framework/configs/main.wdio.conf.js';

import SearchedPersonPage from '../page-objects/searched.page.js';
import DownloadPage from '../page-objects/download.page.js';
import Browser from '../../framework/browser/Browser.js';
import AllureReporter from '@wdio/allure-reporter';

When('I click the download as PDF link', async function () {
    AllureReporter.addStep('Click the download as PDF button');
    await SearchedPersonPage.clickDownloadPdfButton();
});

Then('I should link to download PDF page', async function () {
    AllureReporter.addStep('Check Download Page is opened');
    assert.isTrue(await DownloadPage.isPageOpened(), 'Download Page is not opened');
});

When('I get file name', async function () {
    AllureReporter.addStep('Get file name');
    this.fileName =  await DownloadPage.getFileNameFromElement();
});

When('I click the download button', async function () {
    AllureReporter.addStep('Click the download button');
    await DownloadPage.clickDownloadButton();
});

Then('I should download the PDF file', async function () {
    AllureReporter.addStep(`Check file is downloaded: ${this.fileName}`);
    assert.isTrue(await Browser.File.isFileExist(downloadDir + this.fileName), 'File is not downloaded');
});