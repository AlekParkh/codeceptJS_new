const {expect} = require("chai");

Feature('Product Categories');

Before(({ mainPage }) => {
    mainPage.visit()
})

Scenario('Check that all available product categories are visible for users',  async ({ mainPage }) => {
    const expectedCategories =
        ['Books', 'Computers', 'Electronics', 'Apparel & Shoes', 'Digital downloads', 'Jewelry', 'Gift Cards'];
    const actualCategories = await mainPage.getMainCategories();
    await expect(actualCategories).to.deep.equal(expectedCategories);
});
