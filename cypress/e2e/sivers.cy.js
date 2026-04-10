describe("check book prices", () => {
  it("checks for first book", () => {
    cy.visit("https://sive.rs/book");
    cy.contains('a[data-sort="date"]', "newest").click();
    cy.get("#booklist li")
      .first()
      .find("time")
      .should("have.attr", "datetime")
      .and("equal", "2026-03-03");
  });
});
