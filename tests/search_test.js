const {expect} = require("chai");

Feature('Search Functionality');

Before(({ searchPage }) => {
    searchPage.visit()
})

Scenario('Search with existing data',  async ({ searchPage }) => {
    searchPage.fillSearchInput('diamond');
    const expectedResult =
        ['Black & White Diamond Heart', 'Diamond Pave Earrings', 'Diamond Tennis Bracelet', 'Vintage Style Three Stone Diamond Engagement Ring'];
    const actualResult = await searchPage.getSearchResult();
    await expect(actualResult).to.eql(expectedResult);
});

Scenario('Search with empty data should show an alert',  async ({ I, searchPage }) => {
    I.waitForFunction(() => window.confirm);
    searchPage.fillSearchInput('');
    I.waitForFunction(() => window.confirm('Please enter some search keyword'));
});
