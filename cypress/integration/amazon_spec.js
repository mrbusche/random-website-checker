describe('check fitness factory 0 results', () => {
    const productIds = ['S2CCO/3','S2CCO/2','S2CCO/1','S2CCO','S2BTP','S2BTP/2','S2BTP/1','S2ACD/2','S2AC','BSTVD2','BSTVD10','BSTVD7','BSTVD8','PPR1000','PPR500','PPR200X','PLPX','PLA500','BSG10LPX','PPR500EXT','PLA1000','SBZ20','SBB20','SBB30','SR-SBH','SR-SC','GAP10','GAP348','GAP378','GAP378','GAP1','GAP5','GAPIOT','GAPLP','GAP9','GAP3','GAP6','SDKR1000SD','SDKR1000DB','SDKR1000MB','SDKR500SD','SDKR500DB','SDKR500MB','SDKR500KB','SDKRDBS','SDKRDBL','SDC2000G/2','SDC2000G/1','SCC1200G/2','SCC1200G/1','SLP500G/3','SLM300G/3','SLE200G/3','SLE200G/2','SLC400G/3','SLC400G/2','DPRS-S','DPRSSF','DPLS-S','DPLSSF','DPEC-S','DPECSF','DGYM-FRAME','DPCC-S','DPCCSF','DLEC-S','DIOTSF','DLATSF','DLECSF','DLAT-S','DIOT-S','SBS100','SAB500','SDKRUP2','SDKRUP','SDKRKB','SGH500','SFID425','SFID325B','SFID325','SFB125','SPRPS','SPRSA','SPRSS','SPRST','SPRTB','SPRHALFBACK','SPRHBH','SPRPLATFORM'];
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
