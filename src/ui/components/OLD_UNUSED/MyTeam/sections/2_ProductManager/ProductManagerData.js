import React from 'react';
import { Trans } from 'react-i18next';
import IconProductManagerMobile from '../../Icons/Mobile/IconProductManagerMobile';
import IconProductManagerDesktop from '../../Icons/Desktop/IconProductManagerDesktop';

export const data = {
    id: 'ProductManager',
    iconMobile: <IconProductManagerMobile />,
    iconDesktop: <IconProductManagerDesktop />,
    headline: (
        <>
            <span>
                <Trans>Product Manager</Trans>
            </span>
            <br />
            <span>
                <Trans>Team Lead</Trans>
            </span>
        </>
    ),
    quote: (
        <Trans>
            "We put our effort into creating an intuitive experience for your
            users."
        </Trans>
    ),
    tools: (
        <>
            <span>
                <Trans>Jira</Trans>
            </span>
            <br />
            <span>
                <Trans>Project management</Trans>
            </span>
            <br />
            <span>
                <Trans>Google Suite</Trans>
            </span>
            <br />
            <span>
                <Trans>Figma</Trans>
            </span>
            <br />
            <span>
                <Trans>Github</Trans>
            </span>
        </>
    ),
};
