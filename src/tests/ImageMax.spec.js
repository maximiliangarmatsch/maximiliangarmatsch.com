/// <reference types="cypress"/>
import React from 'react';
import { mount } from 'cypress-react-unit-test';
import ImageMaximilian from '../ui/components/ImageMaximilian';

describe('Image maximilian', () => {
    beforeEach(() => {
        mount(<ImageMaximilian />);
    });
    it('renders component with style', () => {
        cy.get('img').should('have.attr', 'alt', 'Maximilian Garmatsch');
    });
});
