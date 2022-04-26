describe('check fitness factory 0 results', () => {
    const productIds = ['SPRJC','SPRDIP','SPRDCB','SPRCB','SPRBT','SPRBCB','SPRBACK','SPRACB','SPR500BACK','SPR500','SPR250','SPB368G','SP300','SPR1000BACK','SPR1000','DCLP-S','DCLPSF','DGYM','DABBSF','DABB-S','DBTCSF','DBTC-S','E5000','9PRECORAMT835-C','S2FT','LP40S','LO378','GSWT','GS348QP4','GPR400','BSTVD3','BSTND4','BSTND8','HAHTPH2','BSTFB6','HB223-LRG','GPCA1','GOBH5','GMRT6','GMR10-PACK','GLDA1','FSHDP','FSHDM','FMH','B4UB','LVSR','LVLA','LVBP','GLA348QS','GINV50','GFR500-PACK','GFR500','GFID225','GFID100','GFB350','GDR60UP','GDR60','GDR500-NEOPACK','GDR24-VPACK','GDCCRACK','GDCC250','GCRPACK','GCR100','GCA2','GBPR10','WSP200','VKR30','VDRA30-PACK','T150','T25','T50','GAR250','GAR100','FID46','G1S','G3S','G5S','G6BR','G10B','EXM4000S','EXM3000LPS','BSG10X','R300','PSS60X','PPRPS','PPR1000EXT','PPA13X','PGM200X','PFID130X','PFID125X','BSTND15','BSTSH','SDR12','SDR40','C2-SKIERG-STAND','C2-SKIERG','C2-BIKEERG','KBL15','KB75','KBX10KG','MB100A','MB022A','XTERRA2500','KBX32KG','KBV20','ST-6150-8RDE-10','ST-6160-8VS-LCD','ST-6160-8VS-2019-15-ATSC','ST-6160-8VS-10','ST-6150-8RDE-LCD','ST-6150-8RDE-2019-15-ATSC','ST-6140-8CT-LCD','ST-6140-8CT-2019-15-ATSC','ST-6140-8CT-10','RFRX2500T','ST-8TR-110-10','ST-8TR-110-19-ATSC','ST-8TR-110-LCD','ST-8TH-110-LCD','ST-8TRX-110-19-ATSC','ST-8TRX-110-10','ST-8TRX-110-LCDQ','ST-10TRX-110-LCDQ','ST-10TRX-110-19-ATSC'];
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
