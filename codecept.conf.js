exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://demowebshop.tricentis.com/',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './framework/pages/LoginPage.js',
    mainPage: './framework/pages/MainPage.js',
    searchPage: './framework/pages/SearchPage.js',
  },
  tests: './tests/*_test.js',
  name: 'codeceptJS_new'
}
