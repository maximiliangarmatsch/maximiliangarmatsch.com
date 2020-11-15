import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import DeviceProvider from '../../../helpers/DeviceProvider';

export default function DownloadCV() {
    const location = useLocation();

    const { t } = useTranslation();
    let href = '';
    let downloadName = '';

    if (location.pathname === '/cv') {
        href = '/assets/CV - Maximilian Garmatsch - JavaScript Developer.pdf';
        downloadName = 'CV - Maximilian Garmatsch - JavaScript Developer.pdf';
    }
    if (location.pathname === '/lebenslauf') {
        href =
            '/assets/Lebenslauf - Maximilian Garmatsch - JavaScript Developer.pdf';
        downloadName =
            'Lebenslauf - Maximilian Garmatsch - JavaScript Developer.pdf';
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
            <Link
                to="/"
                color="green"
                style={{ color: 'green', textDecoration: 'none' }}
            >
                {t('Back to the start')}
            </Link>
        </DeviceProvider>
    );
}
