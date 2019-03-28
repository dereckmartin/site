// https://docs.cypress.io/api/introduction/api.html

describe("HomeView", () => {
  it("Visits Home View", () => {
    cy.visit("/");
    cy.get('article').should('have.id', 'v-home');
  });
});


