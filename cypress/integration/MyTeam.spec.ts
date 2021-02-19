/// <reference types="cypress"/>
/// <reference path="../support/commands.ts" />

describe('My Team', () => {
    it('display page', () => {
        cy.visit('/myteam');

        cy.contains(/team/).should('be.visible');
    });

    it('go back to main page', () => {
        cy.getSel('back-button').click();

        cy.url().should('equal', Cypress.config().baseUrl);
    });
});
