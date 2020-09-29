describe('For You I Will', () => {
    beforeEach(() => {
        cy.visit('/foryouiwill');
        cy.viewport(1440, 660);
        cy.getSel('cookie-button').click({ force: true });
    });

    it('For You I Will Sections', () => {
        cy.getSel('section-checkpoint').should('have.length', 3);
    });

    it('Last Step', () => {
        cy.get('div[class*="IconButtonBig"]').click();
        cy.url().should('eq', 'http://localhost:3000/letsgetstarted');
    });

    it('Last Step Button Content', () => {
        cy.get('div[class*="IconButtonBig"]').should('contain', 'Last step');
    });
});
