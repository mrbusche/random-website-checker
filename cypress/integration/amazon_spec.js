describe('check fitness factory 0 results', () => {
    const productIds = ['KBXS66','BSTFB15','BSTFB4','GMFP-STK/3','GVKR82','GDR363','GFID31','PLM180X','BSTNDS110','BSTND7','BSTND9','BSTND2','GDR80SDR550','GDR80SDX550','GDR10P4','GMR5','S2SP/3','S2SP/2','S2SP','S2SLC/2','S2SLC/1','S2SLC','S2PEC/2','S2PEC/1','S2PEC','S2MP/3','S2MP/2','S2MP','S2LPC/3','S2LPC/2','S2LPC','S2LEX/2','S2LEX/1','S2LEX','S2LEC/2','S2LEC','S2LAT/2','S2LAT/1','S2LAT','S2IOT/2','S2IOT/1','S2IOT','S2FT/3','S2FT/2','S2FT/1','S2CP/3','S2CP/2','S2CP','S2CC/3','S2CC/2','S2CC/1'];
    for (const product in productIds) {
        it(`check for 0 results ${productIds[product]}`, () => {
            cy.visit('https://dev.fitnessfactory.com');
            cy.get('#headerSearch').type(productIds[product]);
            cy.get('.btn.search').click();
            cy.url().then(($url) => {
                if ($url.includes('Search/index.cfm')) {
                    cy.get('h1.category').eq(0).should(($div) => {
                        const text = $div.text().replace(/\s\s+/g, ' ').trim();
                        expect(text).not.to.contain('0 Results for');
                    });
                }
            })
        })
    }
})
