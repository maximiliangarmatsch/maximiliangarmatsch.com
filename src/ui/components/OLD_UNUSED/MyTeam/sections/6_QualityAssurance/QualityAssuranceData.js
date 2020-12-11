import React from 'react';
import { Trans } from 'react-i18next';
import IconQualityAssuranceMobile from '../../Icons/Mobile/IconQualityAssuranceMobile';
import IconQualityAssuranceDesktop from '../../Icons/Desktop/IconQualityAssuranceDesktop';

export const data = {
    id: 'QualityAssurance',
    iconMobile: <IconQualityAssuranceMobile />,
    iconDesktop: <IconQualityAssuranceDesktop />,
    headline: (
        <span>
            <Trans>Quality Assurance</Trans>
        </span>
    ),
    quote: <Trans>“We test your application to perfection!”</Trans>,
    tools: (
        <>
            <span>
                <Trans>Cypress.JS</Trans>
            </span>
            <br />
            <span>
                <Trans>Selenium</Trans>
            </span>
            <br />
            <span>
                <Trans>Browserstack.com</Trans>
            </span>
        </>
    ),
};
