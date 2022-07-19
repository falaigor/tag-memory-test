// <reference type="cypress"/>//

describe("App", () => {
  it("should render", () => {
    cy.visit("http://localhost:3000");

    cy.get("body").contains("HTML Tag memory test");
    cy.get("body").contains("How many HTML tags can you remember?");
  });

  describe("App > Select Difficulty", () => {
    it("should change difficulty to EASY when click", () => {
      cy.visit("http://localhost:3000");

      cy.get("button[data-testid='button-difficulty-easy']").click();
      cy.get("body").contains("01:00");
    });

    it("should change difficulty to HARD when click", () => {
      cy.visit("http://localhost:3000");

      cy.get("button[data-testid='button-difficulty-hard']").click();
      cy.get("body").contains("00:30");
    });

    it("should change difficulty to EXPERT when click", () => {
      cy.visit("http://localhost:3000");

      cy.get("button[data-testid='button-difficulty-expert']").click();
      cy.get("body").contains("00:15");
    });
  });

  describe("App > Guessed tag", () => {
    it("should add tag to list guessed tags", () => {
      cy.visit("http://localhost:3000");

      cy.get("input[data-testid='input']").type("HTML");
      cy.get("button[data-testid='button']").click();
      cy.get("body").contains("html");
    });

    it("NOT should add tag to list guessed tags", () => {
      cy.visit("http://localhost:3000");

      cy.get("input[data-testid='input']").type("HTM");
      cy.get("button[data-testid='button']").click();
    });

    describe("Guessed Tag > Difficulty EASY", () => {
      it("should add tag to list guessed tags and start time countdown", () => {
        cy.visit("http://localhost:3000");

        cy.get("input[data-testid='input']").type("HTML");
        cy.get("button[data-testid='button']").click();
        cy.get("body").contains("html");
        cy.get("body").contains("01:05");
      });

      it("NOT should add tag to list guessed tags and start time countdown", () => {
        cy.visit("http://localhost:3000");

        cy.get("input[data-testid='input']").type("HTM");
        cy.get("button[data-testid='button']").click();
        cy.get("body").contains("01:00");
      });
    });

    describe("Guessed Tag > Difficulty HARD", () => {
      it("should add tag to list guessed tags and start time countdown", () => {
        cy.visit("http://localhost:3000");

        cy.get("button[data-testid='button-difficulty-hard']").click();
        cy.get("body").contains("00:30");

        cy.get("input[data-testid='input']").type("HTML");
        cy.get("button[data-testid='button']").click();
        cy.get("body").contains("html");
        cy.get("body").contains("00:33");
      });

      it("NOT should add tag to list guessed tags and start time countdown", () => {
        cy.visit("http://localhost:3000");

        cy.get("button[data-testid='button-difficulty-hard']").click();
        cy.get("body").contains("00:30");

        cy.get("input[data-testid='input']").type("HTM");
        cy.get("button[data-testid='button']").click();
        cy.get("body").contains("00:30");
      });
    });

    describe("Guessed Tag > Difficulty EXPERT", () => {
      it("should add tag to list guessed tags and start time countdown", () => {
        cy.visit("http://localhost:3000");

        cy.get("button[data-testid='button-difficulty-expert']").click();
        cy.get("body").contains("00:15");

        cy.get("input[data-testid='input']").type("HTML");
        cy.get("button[data-testid='button']").click();
        cy.get("body").contains("html");
        cy.get("body").contains("00:16");
      });

      it("NOT should add tag to list guessed tags and start time countdown", () => {
        cy.visit("http://localhost:3000");

        cy.get("button[data-testid='button-difficulty-expert']").click();
        cy.get("body").contains("00:15");

        cy.get("input[data-testid='input']").type("HTM");
        cy.get("button[data-testid='button']").click();
        cy.get("body").contains("00:15");
      });
    });
  });

  describe.only("App > Modal", () => {
    it("should show modal with tag quantity and time", () => {
      cy.visit("http://localhost:3000");

      cy.get("button[data-testid='button-difficulty-expert']").click();
      cy.get("body").contains("00:15");

      cy.get("input[data-testid='input']").type("HTML");
      cy.get("button[data-testid='button']").click();
      cy.get("body").contains("html");

      let timeLeft = 18000; //18 seconds;
      cy.wait(timeLeft);

      cy.get("body").contains("Congratulations");
      cy.get("body").contains("You guessed 1 tag in 17 seconds!");
    });
  });
});
