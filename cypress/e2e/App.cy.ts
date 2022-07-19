// <reference type="cypress"/>//

describe("App", () => {
  it("should render", () => {
    cy.visit("http://localhost:3000");

    cy.get("body").contains("HTML Tag memory test");
    cy.get("body").contains("How many HTML tags can you remember?");
  });

  describe("App > Change difficulty type", () => {
    it("should change difficulty when click", () => {
      cy.get("button[data-testid='button-difficulty-easy']").click();
      cy.get("body").contains("01:00");

      cy.get("button[data-testid='button-difficulty-hard']").click();
      cy.get("body").contains("00:30");

      cy.get("button[data-testid='button-difficulty-expert']").click();
      cy.get("body").contains("00:15");
    });
  });
});
