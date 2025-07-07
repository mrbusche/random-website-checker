describe('ping website', () => {
    it('hits mrbusche.com', () => {
        cy.visit('https://mrbusche.com?automated=true');
        cy.get('a.home-link').first().should('have.text', 'mrbusche.com');
    })

    it(' hits https://cottagesonwash.com', () => {
        cy.visit('https://cottagesonwash.com?automated=true')
        cy.get('a.navbar-brand').first().should('have.text', 'Cottages on Wash');
        cy.get('h2').first().should('have.text', 'Cozy Cottage');
        cy.get('h2').eq(1).should('have.text', 'Haven Hideaway');
    })

    it(' hits Fantasy Movie League Calculator', () => {
        cy.visit('https://fmlcalculator.netlify.app/?automated=true');
        cy.get('h1').first().should('have.text', 'FML Calculator');
        cy.get('#movieInput').should(($div) => {
            const text = $div.text().replace(/\s/g, '');
            expect(text).to.eq('Movies');
        });
        cy.get('#costInput').should(($div) => {
            const text = $div.text().replace(/\s/g, '');
            expect(text).to.eq('Cost');
        });
        cy.get('#estimateInput').should(($div) => {
            const text = $div.text().replace(/\s/g, '');
            expect(text).to.eq('Estimate');
        });
    })

    it(' hits https://isitelectionday.com', () => {
        cy.visit('https://isitelectionday.com?automated=true');
        cy.get('h1').first().should('have.text', 'Is it Election Day?');
        cy.get('#isItTime').should('have.text', 'No.');
        cy.get('footer').should(($div) => {
            const text = $div.text().replace(/\s/g, ' ').trim();
            expect(text).to.eq('Created by Matt Busche');
        });
    })

    it(' hits Occurrence Counter', () => {
        cy.visit('https://occurrencecounter.netlify.app/?automated=true')
        cy.get('h1').should('have.text', 'Occurrence Counter');
        cy.get('h5').should('have.text', 'Supports return, pipe, or comma delimited lists');
        cy.get('label').eq(1).should(($div) => {
            const text = $div.text().replace(/\s/g, ' ').trim();
            expect(text).to.eq('Minimum count');
        });
    })

    it(' hits Random Order Generator', () => {
        cy.visit('https://randomordergenerator.netlify.app/?automated=true')
        cy.get('h1').first().should('have.text', 'Paste a list to generate a random order');
        cy.get('footer').should(($div) => {
            const text = $div.text().replace(/\s/g, ' ').trim();
            expect(text).to.eq('Created by Matt Busche');
        });
    })
})
