/// <reference types="cypress" />

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * gets the selector of data-testid
             *
             * @memberof Chainable
             * @example
             * ```
             *      cy.getSel('button') -> cy.get([data-testid="button"])
             * ```
             */
            getSel: (s: string) => Chainable;
        }
    }
}

export function getSel(s: string, ...args: Array<any>): Cypress.Chainable {
    return cy.get(`[data-testid=${s}]`, ...args);
}

Cypress.Commands.add('getSel', getSel);
