const config = require('../framework/config/config.js')
const expect = require('chai').expect;

const { I, loginPage } = inject();

Given('User opens the login page', () => {
    loginPage.visit();
});

When('User enters correct credentials', () => {
    const { user } = config.credentials;
    loginPage.login(user);
});

Then('The user is successfully authorized and redirected to the main page', async () => {
    I.seeCurrentUrlEquals('https://demowebshop.tricentis.com/')
});

When('User does not enter password', () => {
    const { user } = config.credentials;
    loginPage.login({
        email: user.email,
        password: ''
    });
});

Then('Error message is displayed', async () => {
    const expectedErrorMessage = 'Login was unsuccessful. Please correct the errors and try again.';
    await expect(await loginPage.getNotSuccessLoginError()).to.be.equal(expectedErrorMessage);
    I.seeCurrentUrlEquals('https://demowebshop.tricentis.com/login')
});
