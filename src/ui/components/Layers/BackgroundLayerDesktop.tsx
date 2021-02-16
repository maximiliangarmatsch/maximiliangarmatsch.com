import React, { useEffect, useState } from 'react';
import { Box } from '../Base/Base';
import CookieMessageDesktop from '../Layouts/components/CookieMessageDesktop';
import ShadowLayer from './ShadowLayer';

interface BackgroundLayerDesktopProps {
    children: any;
}
const BackgroundLayerDesktop: React.FC<BackgroundLayerDesktopProps> = ({
    children,
}) => {
    const [showCookieMessage, setShowCookieMessage] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem('cookieAccept') && !showCookieMessage) {
            setShowCookieMessage(true);
        }
    }, [showCookieMessage]);

    const acceptCookie = () => {
        setShowCookieMessage(false);
        //localStorage.setItem('cookieAccept', true);
        localStorage.setItem('cookieAccept', 'true');
    };

    return (
        <Box
            css={`
                background: linear-gradient(45deg, #f9f9f9, #2e2d42);
                background-size: cover;
            `}
            position="absolute"
            left="0"
            top={{ lg: '60px', xl: '70px', xxl: '100px' }}
            height={{
                lg: 'calc(100% - 60px)',
                xl: 'calc(100% - 70px)',
                xxl: 'calc(100% - 100px)',
            }}
            width="100%"
            zIndex={1}
        >
            <Box
                as="img"
                position="fixed"
                bottom="0"
                left={{ lg: '-80px', xl: '0px', xxl: '0px' }}
                maxHeight={{ lg: '90vh', xl: '90vh', xxl: '90vh' }}
                src="/assets/MaxTransparent.png"
                css={
                    showCookieMessage &&
                    `
                    filter: blur(8px);
                `
                }
            />
            <ShadowLayer />
            {showCookieMessage ? (
                <CookieMessageDesktop acceptCookie={acceptCookie} />
            ) : (
                children
            )}
        </Box>
    );
};

export default BackgroundLayerDesktop;
