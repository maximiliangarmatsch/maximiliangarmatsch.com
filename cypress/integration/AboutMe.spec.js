describe('About Me', () => {
    beforeEach(() => {
        cy.visit('/aboutme');
        cy.viewport(1440, 660);
        cy.getSel('cookie-button').click({ force: true });
    });

    it('renders image', () => {
        cy.getSel('max_image').should('have.attr', 'alt', 'Logo');
    });

    it('tests cv and portfolio request link to cv', () => {
        cy.getSel('cv-link').click();
    });

    it('tests link to portfolio download', () => {
        cy.getSel('portfolio-link').click();
    });

    it('/foryouiwill page link button', () => {
        cy.getSel('primary-button').click();
        cy.url().should('contain', 'foryouiwill');
    });
});
