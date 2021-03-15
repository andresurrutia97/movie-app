describe('Navigation', () => {
  before(() => {
    cy.visit('/movie/605116');
    cy.waitForReact();
  });

  it('should load the page playing the movie trailer', () => {
    cy.getReact('ReactPlayer').getProps('playing').should('eql', true);
  });

  it('carousel image scroll should work', () => {
    cy.get('.custom-scrollbar').scrollTo('right');
  });
});
