const config = require('../framework/config/config.js')
const {expect} = require("chai");

Feature('Autorization');

Before(({ loginPage }) => {
    loginPage.visit()
})

Scenario('Success LogIn',  async ({ I, loginPage }) => {
    loginPage.login(config.credentials.user)
    I.dontSeeCurrentUrlEquals('https://demowebshop.tricentis.com/login')
});

Scenario('Impossible autorization w/o password', async ({ I, loginPage }) => {
    loginPage.login({
        email: config.credentials.user.email,
        password: ''
    })
    await expect(await loginPage.getNotSuccessLoginError()).to.be.equal('Login was unsuccessful. Please correct the errors and try again.')
    I.dontSeeCurrentUrlEquals('https://demowebshop.tricentis.com/')
})
