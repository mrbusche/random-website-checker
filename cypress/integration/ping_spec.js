describe('ping website', () => {
    it('hits matthewbusche.com', () => {
        cy.visit('https://matthewbusche.com');
        cy.contains('matthewbusche.com');
        cy.contains('Things I\'ve learned');
    })
})
