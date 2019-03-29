/**
 * Contact View Test
 *
 * @author Dereck Martin <contact@dereckmartin.com>
 * @license BSD 3-Clause "New" or "Revised" License
 * @copyright Dereck Martin 2019
 */
describe("ContactView", () => {
  it("Visits Contact View", () => {
    cy.visit("/#/contact");
    cy.get('article').should('have.id', 'v-contact');
  });
});
