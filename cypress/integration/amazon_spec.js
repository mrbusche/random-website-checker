describe('check fitness factory 0 results', () => {
    const productIds = ['9SPTCU800-M','SR-WPS','SR-TBR','SR-SUSP','SR-FPU','SR-BP','HB70225-MED','HB70225-LRG','HB21300','HB21700','HB140B','HB44501','HB46700','ABS7004B','SM-HIITMILL','SM-8FREECLIMBER-LCD','OBPXC35','BSTSB','BSTSB65','BSTSB55','OBPXC260','BSTND6','RPB10','JLSTAIR','FDMX80','KBL60','OBPZ','SM-8FREECLIMBER-15-ATSC','SM-8FREECLIMBER-10','SDR5','KBS275','BSTND10','SM-10G-10','SM-10G-15-ATSC','YODDP45','KBX12KG','KBV8','KBV40','KBV10','KBC50','KB20','OB86CHICAGO','S202015','S151100','SM-10G-LCD','RME9500HR','RM956iexp','RM966i','RM95RE','RME95Xi','RM95TI','RM95TE','RM9500RHRNG','RM9500HRNG','RM9500HR','RM546i','RM546HR','RMCY610a','RMCY600a','RM7000PTL','RM4600CL','SM-HIITMILLX','SM-HIITROWER','SM-HIITUBE','SM-HIITBIKE','MB438RG','BSTND1','BSTBR','BSTBR2040','BSTBR2030','BSTBR1540','BSTBR1530','BOSU','KB10','BSTND','OBPH15','HB284-MED','HB284-LRG','HB138B-MED','HB1250B/G-XXL','KBV50','KBV35','KBV25','KBV30','KBV15','KBV12','SDR3','PUB30','Y253','RFMASS22GRY','RFHU79','OB47B','OB86LPB','RFMAW','RFMAW5301','RFMAW5304','OB86B','ABSGLUTE','BSTLJO2','BSTLJHX','NAS3','RFBST4PS','RFBST4PB','RF38R','RF36T','RF34B','RFHU34','SPTCSC900','RF546','WSA2-5','ABS7008S','OBPH45','OBPH25','KBX6KG','ABS7013B','ABS1008B','ABS1008','ABS7013S','ABCBRSTSYS','ABCVCBLK','ABX3SBENCH','ABX3SPRO','ABS1014B','ABCBRST','ABSSLEDMILL','ABTF180XL','ABTF180','ABCCS1500','ABCCTLB','ABCCTL','ABCCS3000','ABCCS3000B','OB79WBB','YODDP35','BSTAW10','HB21307','SDR15','SDS210','HB140B-XL','MA330','SFB349G','SDP50','BSTND5'];
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
