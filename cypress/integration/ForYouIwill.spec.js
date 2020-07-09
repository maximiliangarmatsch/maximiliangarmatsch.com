describe('Landing page testing', () => {
    beforeEach(() => {
        cy.visit('/foryouiwill');
        cy.viewport(1440, 660);
        cy.get('button[class*="CookieMessageDesktop"]').click();
    });

    it('testing checkpoints', () => {
        cy.get('div[class*="SectionCheckpoint"]').should('have.length', 3);
    });

    it('testing icon button big', () => {
        cy.get('div[class*="IconButtonBig"]').click();
        cy.url().should('eq', 'http://localhost:3000/letsgetstarted');
    });

    it('Icon large content test', () => {
        cy.get('div[class*="IconButtonBig"]').should('contain', 'Last step');
    });
});
