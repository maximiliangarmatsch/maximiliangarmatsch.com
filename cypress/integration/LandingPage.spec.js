describe('Landing Page', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.viewport(1440, 660);
        cy.getSel('cookie-button').click();
    });

    it('Homepage Navigation', () => {
        cy.getSel('home-page-navigation').click();
        cy.url().should('eq', 'http://localhost:3000/');
    });

    it('Schedule Meeting', () => {
        cy.getSel('schedule-meeting-link')
            .invoke('attr', 'href')
            .then(href =>
                expect(href).to.eq('https://calendly.com/maximilian-garmatsch')
            );
    });

    it('Learn More', () => {
        cy.get("div[class*='IconButtonBig']").should('have.length', 1);
    });

    it('Learn more icon testing on desktop view port', () => {
        cy.get("div[class*='IconButtonBig']").click();
        cy.url().should('contain', 'achievements');
    });
});
