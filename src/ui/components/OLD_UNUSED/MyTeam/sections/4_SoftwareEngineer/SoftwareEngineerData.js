import React from 'react';
import { Trans } from 'react-i18next';
import IconSoftwareEngineeringMobile from '../../Icons/Mobile/IconSoftwareEngineeringMobile';
import IconSoftwareEngineeringDesktop from '../../Icons/Desktop/IconSoftwareEngineeringDesktop';

export const data = {
    id: 'Designer',
    iconMobile: <IconSoftwareEngineeringMobile />,
    iconDesktop: <IconSoftwareEngineeringDesktop />,
    headline: (
        <span>
            {' '}
            <Trans>Software Engineering</Trans>
        </span>
    ),
    quote: (
        <Trans>
            “We use modern technology to bring your ideas to life, store data
            securely and ensure the availability of the server around the
            clock.”
        </Trans>
    ),
    tools: (
        <>
            <span>
                <Trans>React.JS</Trans>
            </span>
            <br />
            <span>
                <Trans>Node.JS / Firebase</Trans>
            </span>
            <br />
            <span>
                <Trans>Flutter / Cordova</Trans>
            </span>
            <br />
            <span>
                <Trans>SQL / NoSQL</Trans>
            </span>
            <br />
            <span>
                <Trans>Git</Trans>
            </span>
            <br />
        </>
    ),
};
