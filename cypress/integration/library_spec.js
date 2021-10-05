describe('check kirkendall', () => {
    it('checks for new releases', () => {
        cy.visit('https://kplcatalog.ankenyiowa.gov/polaris/search/searchresults.aspx?ctx=3.1033.0.0.5&type=Keyword&term=%22:%20ON%20ORDER%22&by=KW&sort=RELEVANCE&limit=TOM=*&query=&page=0&searchid=1');
        cy.get('.c-results-utility-result-count').eq(1).should(($div) => {
            const text = $div.text().replace(/\s\s+/g, ' ').trim();
            expect(text).to.eq('1 - 10 of 62');
        });
    })

    it('checks new books', () => {
        cy.visit('https://kplcatalog.ankenyiowa.gov/polaris/Search/newreleases.aspx?ListingTypeID=26');
        cy.get('.new-releases__link a').first().should('have.text', 'The Leather Apron Club : Benjamin Franklin, his son Billy, and America's first circulating library');
    })

    it('checks new videos', () => {
        cy.visit('https://kplcatalog.ankenyiowa.gov/polaris/Search/newreleases.aspx?ListingTypeID=27');
        cy.get('.new-releases__link a').first().should('have.text', 'Spirit untamed : the movie');
    })
})

describe('check bridges', () => {
    it('checks for new audiobooks', () => {
        cy.visit('https://bridges.overdrive.com/bridges-kirkendall/content/collection/37479?addedDate=days-0-7');
        cy.get('body').then((body) => {
            if (!body.find('.Results-noResultsHeading').length > 0) {
                cy.get('.search-text.h2').first().should('have.text', 'Showing 1-24 of 65 results');
            }
        });
    })
    it('checks for new ebooks', () => {
        cy.visit('https://bridges.overdrive.com/bridges-kirkendall/content/collection/37473?addedDate=days-0-7');
        cy.get('body').then((body) => {
            if (!body.find('.Results-noResultsHeading').length > 0) {
                cy.get('.search-text.h2').first().should('have.text', 'Showing 1-24 of 63 results');
            }
        });
    })

})
