/// <reference types="cypress" />

describe("realhomes app", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:3000");
  });

  it("check main page title", () => {
    cy.get('[data-testid="title"]').should("exist");
    cy.get('[data-testid="title"]').should("have.text", "RealHomes");
  });

  it("check main page image", () => {
    cy.get('[data-testid="MainImage"]').should("exist");
  });
  it("check main page header", () => {
    cy.get('[data-testid="Home"]').should("exist");
    cy.get('[data-testid="Properties"]').should("exist");
    cy.get('[data-testid="Admin"]').should("exist");
  });

  it("check main page footer", () => {
    cy.get('[data-testid="footer"]').should("exist");
  });
});
