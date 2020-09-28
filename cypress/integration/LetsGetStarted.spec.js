describe('Lets Get Started', () => {
    beforeEach(() => {
        cy.visit('/letsgetstarted');
        cy.viewport(1440, 660);
        cy.getSel('cookie-button').click();
    });

    it('testing intro link', () => {
        cy.contains('maximiliangarmatsch.com/intro')
            .invoke('attr', 'href')
            .then(href =>
                expect(href).to.eq('https://maximiliangarmatsch.com/intro')
            );
    });

    it('testing paypal link', () => {
        cy.contains('Super easy booking')
            .invoke('attr', 'href')
            .then(href =>
                expect(href).to.eq('https://calendly.com/maximilian-garmatsch')
            );
    });
});
