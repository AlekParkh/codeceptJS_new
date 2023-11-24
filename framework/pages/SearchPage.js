const { I } = inject();

module.exports = {
    searchInput: locate('#small-searchterms'),
    searchBtn: locate('.button-1.search-box-button'),
    searchResults: locate('.search-results .product-title'),


    visit() {
        I.amOnPage('https://demowebshop.tricentis.com/search')
        I.see('Search keyword')
    },
    fillSearchInput(value) {
        I.fillField(this.searchInput, value)
        I.click(this.searchBtn)
    },
    getSearchResult() {
        return I.grabTextFromAll(this.searchResults);
    }
}
