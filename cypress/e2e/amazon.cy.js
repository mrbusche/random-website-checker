describe("check book prices", () => {
  it("checks for first book", () => {
    cy.visit(
      "https://www.amazon.com/hz/wishlist/ls/153OV2P85MJD6?type=wishlist&filter=unpurchased&sort=price-asc&viewType=list"
    );

    cy.get("body").then(($body) => {
      if ($body.find(".a-button-text").length) {
        cy.get(".a-button-text").first().click({ force: true });
      }
    });

    cy.get(".g-item-sortable")
      .first()
      .find("span.a-offscreen")
      .first()
      .should("have.text", "$4.65");
  });
});
