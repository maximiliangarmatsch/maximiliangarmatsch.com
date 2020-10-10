import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link, useLocation } from 'react-router-dom';
import DeviceProvider from '../../../helpers/DeviceProvider';

export default function DownloadPortfolio() {
    const location = useLocation();

    let href = '';
    let downloadName = '';

    if (location.pathname === '/portfolio') {
        href =
            '/assets/Portfolio - Maximilian Garmatsch - Engineering Manager.pdf';
        downloadName =
            'Portfolio - Maximilian Garmatsch - Engineering Manager.pdf';
    }

    useEffect(() => {
        var link = document.createElement('a');
        link.href = href;
        link.download = downloadName;
        link.dispatchEvent(new MouseEvent('click'));
    }, [downloadName, href, location.pathname]); //only once

    return (
        <DeviceProvider>
            The download has started...
            <br />
            <Link to="/">
                <FormattedMessage defaultMessage="Back to the start" />
            </Link>
        </DeviceProvider>
    );
}
