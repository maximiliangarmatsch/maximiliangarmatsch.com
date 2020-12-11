import React from 'react';
import { Trans } from 'react-i18next';
import IconUiUxDesignMobile from '../../Icons/Mobile/IconUiUxDesignMobile';
import IconUiUxDesignDesktop from '../../Icons/Desktop/IconUiUxDesignDesktop';

export const data = {
    id: 'Designer',
    iconMobile: <IconUiUxDesignMobile />,
    iconDesktop: <IconUiUxDesignDesktop />,
    headline: (
        <>
            <span>
                <Trans>User Interface</Trans>
            </span>
            <br />
            <span>
                <Trans>User Experience</Trans>
            </span>
        </>
    ),
    quote: (
        <Trans>
            “We put our effort into creating an intuitive experience for your
            users.”
        </Trans>
    ),
    tools: (
        <>
            <span>
                <Trans>Figma</Trans>
            </span>
            <br />
            <span>
                <Trans>Adobe Photoshop</Trans>
            </span>
            <br />
            <span>
                <Trans>Adobe Ilustrator</Trans>
            </span>
            <br />
            <span>
                <Trans>Adobe InDesign</Trans>
            </span>
        </>
    ),
};
