describe("check book prices", () => {
  it("checks for first book", () => {
    cy.visit(
      "https://www.amazon.com/hz/wishlist/ls/153OV2P85MJD6?type=wishlist&filter=unpurchased&sort=price-asc&viewType=list"
    );
    cy.get(".g-item-sortable")
      .first()
      .should("have.attr", "data-price")
      .and("equal", "4.65");
  });
});
