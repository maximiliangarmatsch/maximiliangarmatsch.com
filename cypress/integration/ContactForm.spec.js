describe('Lets Get Started', () => {
    beforeEach(() => {
        cy.visit('/contactform');
        cy.viewport(1440, 660);
        cy.getSel('cookie-button').click({ force: true });
    });

    it('stub contact form', () => {
        cy.fixture('contactForm').then(contactForm => {
            cy.getSel('contact-form-name')
                .click()
                .type(contactForm.name);

            cy.getSel('contact-form-company')
                .click()
                .type(contactForm.company);

            cy.getSel('contact-form-about-project')
                .click()
                .type(contactForm.aboutProject);

            cy.get('div[class*="IconButtonBig"]').click();
        });
    });
});
