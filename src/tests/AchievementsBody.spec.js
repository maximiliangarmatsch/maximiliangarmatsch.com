import React from 'react';
import { mount, unmount } from 'cypress-react-unit-test';
import { formatValues } from '../ui/pages/AboutMe/AchievementsBody';

describe('format values function', () => {
    afterEach(() => {
        unmount();
    });

    it('testing the function of formatrValues context', () => {
        const Component = ({ formatValues }) => {
            return (
                <>
                    <div>{formatValues.header('this is header')}</div>
                    <div>{formatValues.subheader('this is subheader')}</div>
                    <div>{formatValues.rest('this is rest')}</div>
                </>
            );
        };

        mount(<Component formatValues={formatValues} />).then(() => {
            cy.contains('this is header').should('be.visible');
            cy.contains('this is subheader').should('be.visible');
            cy.contains('this is rest').should('be.visible');
        });
    });
});
