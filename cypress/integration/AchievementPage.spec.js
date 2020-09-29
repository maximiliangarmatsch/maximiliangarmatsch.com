describe('Achievement Page', () => {
    beforeEach(() => {
        cy.visit('/achievements');
        cy.viewport(1440, 660);
        cy.getSel('cookie-button').click({ force: true });
    });

    it('display six point', () => {
        cy.get('iron-checkpoint').should('have.length', 6);
    });

    it('testing icon button big', () => {
        cy.get('div[class*="IconButtonBig"]').click();

        cy.url().should('eq', 'http://localhost:3000/foryouiwill');
    });
});
