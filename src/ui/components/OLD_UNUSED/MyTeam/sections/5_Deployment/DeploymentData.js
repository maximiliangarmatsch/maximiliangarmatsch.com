import React from 'react';
import { Trans } from 'react-i18next';
import IconServerAdminMobile from '../../Icons/Mobile/IconServerAdminMobile';
import IconServerAdminDesktop from '../../Icons/Desktop/IconServerAdminDesktop';

export const data = {
    id: 'Deployment',
    iconMobile: <IconServerAdminMobile />,
    iconDesktop: <IconServerAdminDesktop />,
    headline: (
        <span>
            <Trans>Server Admin</Trans>
        </span>
    ),
    quote: (
        <Trans>
            “We manage the physical Server on which your Data is stored and I
            deploy to the Apple Appstore and Google Play Store”
        </Trans>
    ),
    tools: (
        <>
            <span>
                <Trans>Ubuntu</Trans>
            </span>
            <br />
            <span>
                <Trans>Docker</Trans>
            </span>
            <br />
            <span>
                <Trans>GitHub</Trans>
            </span>
            <br />
            <span>
                <Trans>XCode</Trans>
            </span>
            <br />
            <span>
                <Trans>Android Studio</Trans>
            </span>
            <br />
            <span>
                <Trans>Bash</Trans>
            </span>
        </>
    ),
};
