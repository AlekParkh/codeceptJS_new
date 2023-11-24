const { I } = inject();

module.exports = {
    fields: {
        email: '#Email',
        password: '[type=Password]'
    },
    logInButton: locate('[class*=login-button]'),
    error: {
        wrongCredentials: '.message-error .validation-summary-errors span'
    },


    visit () {
        I.amOnPage('https://demowebshop.tricentis.com/login')
        I.see('Log in')
        I.see('Welcome, Please Sign In!')
    },
    fillUsername (email) {
        I.fillField(this.fields.email, email)
    },
    fillPassword (password) {
        I.fillField(this.fields.password, password)
    },
    submitForm () {
        I.click(this.logInButton)
    },
    login ({ email, password }) {
        this.visit()
        this.fillUsername(email)
        this.fillPassword(password)
        this.submitForm()
    },
    async getNotSuccessLoginError () {
        return await I.grabTextFrom(this.error.wrongCredentials)
    },
}
