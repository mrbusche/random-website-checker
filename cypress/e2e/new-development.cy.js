describe('check new development', () => {
    it('checks for page size', () => {
        cy.visit('https://www.ankenyiowa.gov/Facilities');
        // cy.get('.cp-Splash-Btn.cp-Splash-Btn--NoShow').click();
        cy.get('#FacilityTypesButton').click();
        cy.get('#CheckAllFacilityTypes').click();
        cy.get('#chkSidebarFacilityTypes6').click();
        cy.get('#SearchButton').click();
        cy.get('input[id="hiddenLastPageNumber"]').should('have.value', '7');
    })
})
