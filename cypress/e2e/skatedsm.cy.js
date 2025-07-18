describe('check skate clinics', () => {
  it('checks for new clinics', () => {
    cy.visit('https://skatedsm.org/learn-to-skate/clinics/');
    cy.get('h4.wp-block-heading')
      .its('length') // Get the length of the jQuery object (number of matched elements)
      .then((count) => {
        expect(count).to.equal(5);
      });
  });
});
