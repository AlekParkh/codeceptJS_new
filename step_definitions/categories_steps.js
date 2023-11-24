const { I, mainPage } = inject();

Given('User opens the main page', () => {
    mainPage.visit();
});

When('User observe the top product categories panel', () => {
});

Then('User can see all available product categories', async () => {
    I.seeCurrentUrlEquals('/')
});
