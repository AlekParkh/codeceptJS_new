const { I, searchPage } = inject();

Given('User opens the search page', () => {
    searchPage.visit();
});

When('User enters some value to the search input', () => {
    searchPage.fillSearchInput('diamond');
});

Then('User can see "Search" returns with correct data', async () => {
    I.seeCurrentUrlEquals('https://demowebshop.tricentis.com/search')
});

When('User try to search with empty value', () => {
    searchPage.fillSearchInput('');
});

Then('User see the error alert', async () => {
    I.seeCurrentUrlEquals('https://demowebshop.tricentis.com/search')
});
