describe("check book prices", () => {
  it("checks for first book", () => {
    cy.visit("https://sive.rs/book?sort=date");
    cy.get(".abook")
      .first()
      .should("have.attr", "data-date")
      .and("equal", "2025-11-26");
  });
});
