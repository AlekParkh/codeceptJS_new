const { I } = inject();

module.exports = {
    categories: {
        books: locate('.top-menu li:nth-child(1) a').withAttr({ href: '/books' }),
        computers: locate('.top-menu li:nth-child(2) a').withAttr({ href: '/computers' }),
        electronics: locate('.top-menu li:nth-child(3) a').withAttr({ href: '/electronics' }),
        apparelAndShoes: locate('.top-menu li:nth-child(4) a').withAttr({ href: '/apparel-shoes' }),
        digitalDownloads: locate('.top-menu li:nth-child(5) a').withAttr({ href: '/digital-downloads' }),
        jewelry: locate('.top-menu li:nth-child(6) a').withAttr({ href: '/jewelry' }),
        giftCards: locate('.top-menu li:nth-child(7) a').withAttr({ href: '/gift-cards' })
    },

    visit () {
        I.amOnPage('/')
        I.see('Welcome to our store')
    },
    async getMainCategories () {
        let categorySelectors = Object.values(this.categories);
        let categoryTexts = [];

        for (const selector of categorySelectors) {
            let text = await I.grabTextFrom(selector);
            text = text.trim(); // Trim the text to remove extra spaces and newlines
            categoryTexts.push(text);
        }

        return categoryTexts;
    },
}
