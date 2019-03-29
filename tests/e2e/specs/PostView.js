/**
 * Post View Test
 *
 * @author Dereck Martin <contact@dereckmartin.com>
 * @license BSD 3-Clause "New" or "Revised" License
 * @copyright Dereck Martin 2019
 */

describe("PostView", () => {
  it("Visits Post View", () => {
    cy.visit("/some-post");
    cy.get('article').should('have.id', 'v-some-post');
  });
});


