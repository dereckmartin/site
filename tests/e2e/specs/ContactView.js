// https://docs.cypress.io/api/introduction/api.html

describe("ContactView", () => {
  it("Visits Contact View", () => {
    cy.visit("/#/contact");
    cy.get('article').should('have.id', 'v-contact');
  });
});
