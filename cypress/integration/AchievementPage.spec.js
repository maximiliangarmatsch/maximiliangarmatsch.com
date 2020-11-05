describe('Achievement Page', () => {
    beforeEach(() => {
        cy.visit('/achievements');
        cy.viewport(1440, 660);
    });

    it('display image', () => {
        cy.getSel('achievement-image').should('be.visible');
    });

    it('testing icon button big', () => {
        cy.get('div[class*="IconButtonBig"]').click();

        cy.url().should('eq', 'http://localhost:3000/foryouiwill');
    });
});
