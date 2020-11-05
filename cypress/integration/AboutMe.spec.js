describe('About Me', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.viewport(1440, 660);
        cy.getSel('cookie-button').click({ force: true });
    });

    it('renders image', () => {
        cy.getSel('max-image').should('have.attr', 'alt', 'Logo');
    });

    it('tests cv and portfolio request link to cv', () => {
        cy.server({
            delay: 500,
            method: 'GET',
        });

        cy.route('/cv');
        cy.getSel('cv-link').click();
        cy.url().should('contain', 'cv');
    });

    it('tests cv and portfolio request link to portfolio', () => {
        cy.server({
            delay: 500,
            method: 'GET',
        });

        cy.route('/portfolio');
        cy.getSel('cv-link').click();
        cy.url().should('contain', 'portfolio');
    });

    it('/foryouiwill page link button', () => {
        cy.contains(/for you/i).click({ force: true });
        cy.url().should('contain', 'foryouiwill');
    });
});
