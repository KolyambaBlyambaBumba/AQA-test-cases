import { Given, When, Then } from '@wdio/cucumber-framework';

import AllureReporter from '@wdio/allure-reporter';

import Login from '../page-objects/login.page.js';
import Products from '../page-objects/products.page.js';

Given('User open the Login page', async () => {
    AllureReporter.addArgument('Base URL', browser.options.baseUrl);
    await Login.open();
    await Login.isPageOpened();
});

When('User enter username {string} and password {string}', async (username, password) => {
    await Login.setCredentials(username, password);
});

When('User click the login button', async () => {
    await Login.clickLoginButton();
});

Then('User should be redirected to the Products page', async () => {
    await expect(await Products.isPageOpened()).toBe(true);
});

Then('User should see an error message {string}', async (expectedMessage) => {
    const errorMessage = await Login.getErrorMessage();
    expect(errorMessage).toBe(expectedMessage);
});