/**
 * About View Test
 *
 * @author Dereck Martin <contact@dereckmartin.com>
 * @license BSD 3-Clause "New" or "Revised" License
 * @copyright Dereck Martin 2019
 */

describe("HomeView", () => {
  it("Visits Home View", () => {
    cy.visit("/");
    cy.get('article').should('have.id', 'v-home');
  });
});


