describe("check book prices", () => {
  it("checks for first book", () => {
    cy.visit("https://weezerwebstore.com/products/weezer-coloring-book-flipbook");
    cy.get(".badge.price__badge-sold-out.color-scheme-3")
      .first()
      .should('have.text', 'Sold out');
  });
});
