describe('Landing Page', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.viewport(1440, 660);
        cy.getSel('cookie-button').click({ force: true });
    });

    it('Homepage Navigation', () => {
        cy.getSel('home-page-navigation').click({ force: true });
        cy.url().should('eq', 'http://localhost:3000/');
    });

    it('Learn More', () => {
        cy.get("div[class*='IconButtonBig']").should('have.length', 1);
    });

    it('Learn more icon testing on desktop view port', () => {
        cy.get("div[class*='IconButtonBig']").click();
        cy.url().should('contain', 'aboutme');
    });
});
