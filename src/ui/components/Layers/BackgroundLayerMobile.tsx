import React, { useEffect, useState } from 'react';
import { Box } from '../Base/Base';
import CookieMessageMobile from '../Layouts/components/CookieMessageMobile';
import ShadowLayer from './ShadowLayer';

interface BackgroundLayerMobileProps {
    children: any;
}
const BackgroundLayerMobile: React.FC<BackgroundLayerMobileProps> = ({
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
            top="60px"
            height="calc(100% - 120px)"
            width="100%"
            zIndex={1}
        >
            <Box
                as="img"
                position={{ _: 'fixed', sm: 'fixed', md: 'absolute' }}
                bottom={{ _: '-35px', sm: '0px', md: '-5%' }}
                left={{ _: '-65px', sm: '-65px', md: '0' }}
                maxWidth={{ _: '500px', sm: '500px', md: 'inherit' }}
                width={{ md: '100vw' }}
                src="/assets/MaxTransparentMobile.png"
                css={
                    showCookieMessage &&
                    `
                    filter: blur(8px);
                `
                }
            />
            <ShadowLayer />
            {showCookieMessage ? (
                <CookieMessageMobile acceptCookie={acceptCookie} />
            ) : (
                children
            )}
        </Box>
    );
};

export default BackgroundLayerMobile;
