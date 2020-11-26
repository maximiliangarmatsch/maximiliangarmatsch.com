/// <reference types="cypress"/>
import React from 'react';
import { mount, unmount } from 'cypress-react-unit-test';
import ImageMaximilian from '../ui/components/ImageMaximilian';

describe('Image maximilian', () => {
    afterEach(() => {
        unmount();
    });

    it('renders component with style', () => {
        mount(<ImageMaximilian />);
        cy.get('img').should('have.attr', 'alt', 'Maximilian Garmatsch');
    });

    it('renders component with margin and size props', () => {
        const margin = {
            _: '2rem auto',
            sm: '2rem auto',
            md: '0 3rem 0 0',
            xxl: '0 5rem 0 0',
        };

        const size = { _: '125px', sm: '125px', md: '180px', xxl: '236px' };

        mount(<ImageMaximilian margin={margin} size={size} />);

        cy.get('img').should('have.attr', 'alt', 'Maximilian Garmatsch');
    });
});
