Cypress.Commands.add('getSel', (selector, ...args) => {
    return cy.get(`[data-testid=${selector}]`, ...args);
});
