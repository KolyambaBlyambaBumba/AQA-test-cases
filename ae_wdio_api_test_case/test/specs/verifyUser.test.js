import { faker } from '@faker-js/faker';
import { postForm } from '../utils/postForm.js';
import testData from '../../testData/testData.json' assert { type: 'json' };
import AllureReporter from '@wdio/allure-reporter';

import Navigation from '../pageobjects/components/navigation.js';
import MainPage from '../pageobjects/main.page.js';
import LoginPage from '../pageobjects/login.page.js';
import SignupPage from '../pageobjects/signup.page.js';
import AccountPage from '../pageobjects/account.page.js';

describe('User Verification', () => {
    it('Should create new user, verify via API, delete and re-verify', async () => {
        AllureReporter.addDescription('This test creates a new user via UI with random data, verifies the user exists via API, deletes the user via UI, and finally verifies the user no longer exists via API.');
        AllureReporter.addSeverity('critical');
        AllureReporter.addTag('API');
        AllureReporter.addOwner('KolyambaBlyambaBumba');
        
        AllureReporter.addStep(`Opening main page on URL: ${testData.urls.baseUrl}`);
        await MainPage.open();
        await expect(await MainPage.isPageOpened()).toBe(true);

        AllureReporter.addStep(`Navigating to login page`);
        await Navigation.clickLinkByHref('/login');
        await expect(await LoginPage.isPageOpened()).toBe(true);

        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const email = faker.internet.email({ firstName, lastName });

        AllureReporter.startStep(`Signing up new user with random data and submitting`);
            AllureReporter.addAttachment('New User Data', `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}`, 'text/plain');
            await LoginPage.signupNewUser(firstName, lastName, email);
            await LoginPage.submitSignup();
            await expect(await SignupPage.isPageOpened()).toBe(true);
        AllureReporter.endStep();

        const password = faker.internet.password({ length: 8 });
        const address = faker.location.streetAddress(true);
        const country = await SignupPage.getRandomCountry();
        const state = faker.location.state();
        const city = faker.location.city();
        const zipCode = faker.location.zipCode();
        const phoneNumber = faker.phone.number({style: 'international'});
        
        AllureReporter.startStep(`Filling account information with random data and submitting`);
            AllureReporter.addAttachment('Account Information', `Password: ${password}\nAddress: ${address}\nCountry: ${country}\nState: ${state}\nCity: ${city}\nZip Code: ${zipCode}\nPhone Number: ${phoneNumber}`, 'text/plain');
            await SignupPage.fillAccountInformation(password, firstName, lastName, address, country, state, city, zipCode, phoneNumber);
            await SignupPage.submitAccountCreation();
        AllureReporter.endStep();

        AllureReporter.addStep(`Verifying account creation and continuing`);
        await expect(await AccountPage.getSuccessCreationMessage()).toHaveText(testData.accountMessages.accountCreated);
        await AccountPage.clickContinueLink();
        await expect(await MainPage.isPageOpened()).toBe(true);

        AllureReporter.startStep(`Checking created user in API with POST request`);
            AllureReporter.addAttachment('API Request', JSON.stringify({ email, password }, null, 2), 'application/json');
            const { res, data } = await postForm(testData.urls.apiUsersUrl, { email, password });
            AllureReporter.addAttachment('API Response', JSON.stringify(data, null, 2), 'application/json');
            expect(res.status).toBe(200);
            expect(data).toMatchObject({ responseCode: 200, message: 'User exists!' });
        AllureReporter.endStep();

        AllureReporter.addStep(`Deleting created user`);
        await Navigation.clickLinkByHref('/delete_account');
        await expect(await AccountPage.getSuccessDeletionMessage()).toHaveText(testData.accountMessages.accountDeleted);
        await AccountPage.clickContinueLink();
        await expect(await MainPage.isPageOpened()).toBe(true);

        AllureReporter.startStep(`Verifying deleted user is removed in API with POST request`);
            AllureReporter.addAttachment('API Request', JSON.stringify({ email, password }, null, 2), 'application/json');
            const { res: resAfterDeletion, data: dataAfterDeletion } = await postForm(testData.urls.apiUsersUrl, { email, password });
            AllureReporter.addAttachment('API Response', JSON.stringify(dataAfterDeletion, null, 2), 'application/json');
            expect(resAfterDeletion.status).toBe(200);
            expect(dataAfterDeletion).toMatchObject({ responseCode: 404, message: 'User not found!' });
        AllureReporter.endStep();
    });
});
