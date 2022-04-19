describe('check ebook prices', () => {
    it('check for ebooks on sale', () => {
        cy.visit('https://smile.amazon.com/hz/wishlist/genericItemsPage/153OV2P85MJD6?type=wishlist&filter=unpurchased&sort=price-asc&viewType=list');
        
        cy.get('body').then((body) => {  
            if (body.find('.itemPriceDrop').length > 0) {
                cy.get().first().parent().should(($div) => {
                    const text = $div.text().replace(/\s\s+/g, ' ').trim();
                    if (text) {
                        const amt = text.substring(text.indexOf('$') + 1);
                        if (amt) {
                            const val = parseFloat(amt.substring(0, 4), 10) > 5;
                            expect(val).to.be.true;
                        }
                    }
                });
            }
        });
    })
})
