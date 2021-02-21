import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Text } from '../../Base/Base';

interface CookieMessageDesktopProps {
    acceptCookie: any;
}
const CookieMessageDesktop: React.FC<CookieMessageDesktopProps> = ({
    acceptCookie,
}) => {
    const { t } = useTranslation();

    return (
        <Box
            maxWidth="600px"
            position="absolute"
            top="50%"
            right="10%"
            border="1px solid #0DE99A"
            bg="rgba(25, 25, 25, 0.64)"
            fontSize="24px"
            lineHeight="36px"
            color="green"
            zIndex="10"
            p="50px"
            css={`
                transform: translateY(-50%);
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            `}
        >
            <Text fontSize="28px">
                {t('This site uses cookies.')}
                <br />
                <br />
            </Text>
            {t(
                'We use our own cookies and those of third parties to improve our services, customize our website, improve users experience in our website, identify and solve problems, measure the usage, compile statistics.'
            )}
            <br />
            {t('View our cookie ')}
            <Text
                as={Link}
                to="/impressum"
                css={`
                    text-decoration: none;
                    color: white;
                `}
                color="white"
            >
                {t('policy')}
            </Text>
            <br />
            <Box
                as="button"
                bg="#222"
                css={`
                    box-shadow: 0px 0px 16px #000000;
                `}
                borderRadius="12px"
                border="none"
                fontSize="26px"
                color="green"
                p="10px 15px"
                mt="20px"
                onClick={acceptCookie}
                data-testid="cookie-button"
            >
                {t('Accept')}
            </Box>
        </Box>
    );
};

export default CookieMessageDesktop;
