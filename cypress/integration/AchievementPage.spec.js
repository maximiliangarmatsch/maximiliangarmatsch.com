describe('Achievements page testing', () => {
    beforeEach(() => {
        cy.visit('/achievements');
        cy.viewport(1440, 660);
        cy.get('button[class*="CookieMessageDesktop"]').click();
    });

    it('testing icon checkpoints', () => {
        cy.get('div[class*="IconCheckpoint"]').should('have.length', 6);
    });

    it('testing icon button big', () => {
        cy.get('div[class*="IconButtonBig"]').click();

        cy.url().should('eq', 'http://localhost:3000/foryouiwill');
    });
});
