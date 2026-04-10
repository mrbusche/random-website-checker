describe("check book prices", () => {
  it("checks for first book", () => {
    cy.visit("https://sive.rs/book?sort=date");
    cy.get("#booklist li")
      .first()
      .find("time")
      .should("have.attr", "datetime")
      .and("equal", "2026-03-03");
  });
});
