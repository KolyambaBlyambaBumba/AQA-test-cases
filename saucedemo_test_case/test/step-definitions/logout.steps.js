import { When, Then } from '@wdio/cucumber-framework';

import Login from '../page-objects/login.page.js';
import Products from '../page-objects/products.page.js';

When('User click the menu button', async () => {
    await Products.clickMenuButton();
});

When('User click the logout button', async () => {
    await Products.clickLogoutButton();
});

Then('User should be redirected to the Login page', async () => {
    await expect(Login.uniqueElement).toBeDisplayed();
});

When('User click the browser back button', async () => {
    await browser.back();
});
