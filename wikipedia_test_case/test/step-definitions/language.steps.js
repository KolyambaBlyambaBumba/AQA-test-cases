import { When } from '@wdio/cucumber-framework';

import testData from '../../testData/testData.json' assert { type: "json" };
import AllureReporter from '@wdio/allure-reporter';

import WikiMainPage from '../page-objects/main.page.js';

When('I switch the language to Spanish', async function () {
    AllureReporter.addStep(`Switch language to: ${testData.languageTest.language}`);
    await WikiMainPage.selectLanguage(testData.languageTest.language);
});