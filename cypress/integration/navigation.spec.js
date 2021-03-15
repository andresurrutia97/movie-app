describe('Navigation', () => {
  before(() => {
    cy.visit('/');
    cy.waitForReact();
  });

  it('should have the home page as the first page', () => {
    cy.location('pathname').should('eql', '/');
  });

  it('should redirect to the movie page', () => {
    cy.react('Button').click();
    cy.location('pathname').should('include', 'movie');
  });

  it('should redirect to the home page when click en the Home option in the Header', () => {
    cy.react('Header').react('HeaderOptionsItem').click();
    cy.location('pathname').should('eql', '/');
  });

  it('should redirect to 404 page page when provided a non existing route', () => {
    cy.visit('/dogs');
    cy.location('pathname').should('eql', '/error404');
  });
});
