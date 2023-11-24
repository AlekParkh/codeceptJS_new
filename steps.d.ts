/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type loginPage = typeof import('./framework/pages/LoginPage.js');
type mainPage = typeof import('./framework/pages/MainPage.js');
type searchPage = typeof import('./framework/pages/SearchPage.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, searchPage: searchPage, mainPage: mainPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
