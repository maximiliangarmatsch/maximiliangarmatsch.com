/// <reference types="cypress" />
import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { Box, Card } from './Base';

describe('base component testing', () => {
    it('Box', () => {
        mount(
            <Box color="red" borderRadius={10}>
                Hello world
            </Box>
        );
        cy.get('[color="red"]')
            .should('have.css', 'color', 'rgb(255, 0, 0)')
            .should('have.css', 'border-radius', '10px');
    });

    it.only('Card', () => {
        mount(<Card>Testing Card component</Card>);
    });
});
