describe('Landing page testing', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.viewport(1440, 660);
        cy.get('button[class*="CookieMessageDesktop"]').click();
    });

    it('Logo reference testing', () => {
        cy.get("a[class*='TextLogo']")
            .click()
            .url()
            .should('eq', 'http://localhost:3000/');
    });

    it('Link text meeting reference', () => {
        cy.get("a[class*='LinkTextMeeting']")
            .invoke('attr', 'href')
            .then(href =>
                expect(href).to.eq('https://calendly.com/maximilian-garmatsch')
            );
    });

    it('Learn more icon testing on desktop view port', () => {
        cy.get("div[class*='IconButtonBig']").should('have.length', 1);
    });

    it('Learn more icon testing on desktop view port', () => {
        cy.get("div[class*='IconButtonBig']").click();
        cy.url().should('contain', 'achievements');
    });
});
