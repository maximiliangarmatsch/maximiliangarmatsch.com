describe('Lets Get Started', () => {
    beforeEach(() => {
        cy.visit('/contact');
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

            //email
            cy.getSel('contact-form-email')
                .click()
                .type(contactForm.email);
            //phone number
            cy.getSel('contact-form-phone')
                .click()
                .type(contactForm.phoneNumber);

            // cool
            cy.getSel('contact-form-about-project')
                .click()
                .type(contactForm.aboutProject);

            //stub the backend submit button
            //cy.get('div[class*="IconButtonBig"]').click();
        });
    });
});

// name
