describe('Home page', () => {
  before(() => {
    cy.visit('/');
    cy.waitForReact();
  });

  it('should open the carousel content for the clicked movie', () => {
    cy.react('Carousel')
      .get('.slider-content__area__container')
      .should('not.exist');

    cy.react('Carousel')
      .eq(0)
      .react('Item')
      .eq(1)
      .react('ShowDetailsButton')
      .click();

    cy.react('Carousel')
      .get('.slider-content__area__container')
      .should('exist');
  });

  it('should close the carousel content for the clicked movie', () => {
    cy.react('Carousel')
      .get('.slider-content__area__container')
      .get('.slider-content__close')
      .click();

    cy.react('Carousel')
      .get('.slider-content__area__container')
      .should('not.exist');
  });

  it('should not show the 10th movie item until the slideButton is clicked and have one instance of slidebutton before clicked', () => {
    cy.react('Carousel').eq(0).react('SlideButton').should('have.length', 1);

    cy.react('Carousel').eq(0).react('Item').eq(10).should('not.be.visible');
    cy.react('Carousel').eq(0).react('SlideButton').click();
    cy.react('Carousel').eq(0).react('SlideButton').click();
    cy.react('Carousel').eq(0).react('Item').eq(10).should('be.visible');

    cy.react('Carousel').eq(0).react('SlideButton').should('have.length', 2);
  });

  it('should redirect to the movie page', () => {
    cy.react('Button').click()
    cy.location('pathname').should('include', 'movie')
  });
});
