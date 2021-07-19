describe('ping website', () => {
    it('hits matthewbusche.com', () => {
        cy.visit('https://matthewbusche.com');
        cy.contains('matthewbusche.com');
        cy.contains('Things I\'ve learned');
    })


    it(' hits https://cottagesonwash.com', () => {
        cy.visit('https://cottagesonwash.com')
        cy.contains('Cottages on Wash');
        cy.contains('Cozy Cottage');
        cy.contains('Haven Hideaway')
    })
    it(' hits https://fmlcalculator.com', () => {
        cy.visit('https://fmlcalculator.com')
        cy.contains('FML Calculator');
        cy.contains('Movies');
        cy.contains('Cost');
        cy.contains('Estimate');
    })
    it(' hits https://dynastytradecalc.com', () => {
        cy.visit('https://dynastytradecalc.com')
        cy.contains('Dynasty Trade Calculator');
        cy.contains('Please choose players for each team.');
        cy.contains('Team One');
        cy.contains('Team Two');
    })
    it(' hits https://isitelectionday.com', () => {
        cy.visit('https://isitelectionday.com')
        cy.contains('Is it Election Day?');
        cy.contains('No.');
        cy.contains('Created by Matt Busche')
    })
    it(' hits https://occurrencecounter.com', () => {
        cy.visit('https://occurrencecounter.com')
        cy.contains('Occurrence Counter');
        cy.contains('Supports return, pipe, or comma delimited lists');
        cy.contains('Minimum count')
    })
    it(' hits https://randomordergenerator.com', () => {
        cy.visit('https://randomordergenerator.com')
        cy.contains('Paste a list to generate a random order');
        cy.contains('Created by Matt Busche')
    })
})
