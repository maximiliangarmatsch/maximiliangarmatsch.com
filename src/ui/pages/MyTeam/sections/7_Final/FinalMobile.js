import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Text } from '../../../../components/Base/Base';
import Line from '../../components/Line';
import IconCheckpoint from '../../Icons/IconCheckpoint';

export default function FinalMobile() {
    const { t } = useTranslation();
    return (
        <Box id="Final" height="calc(100vh - 75px)" position="relative">
            <Line
                position="vertical"
                length="30px"
                left="20.5%"
                transform="translateX(-50%)"
            />
            <Line
                absolute={true}
                position="horizontal"
                length="30vw"
                left="20.5%"
            />
            <Line
                absolute={true}
                position="vertical"
                length="130px"
                left="50%"
                transform="translateX(-50%)"
            />
            <IconCheckpoint
                color="green"
                size="30px"
                left="50%"
                transform="translateX(-50%)"
                top="20%"
            />
            <Box
                position="relative"
                top="20%"
                p="20px"
                lineHeight="1.2rem"
                textAlign="center"
            >
                <Text as="p" color="green">
                    {t('That’s us.')}
                </Text>
                <Text as="p">
                    {t(
                        'Now tell us about your project and we will schedule a call within 48 hours.'
                    )}
                </Text>
                <Text as="p" color="green">
                    {t('Tell us about your project')}
                </Text>
            </Box>
            <Text
                as={Link}
                position="absolute"
                bottom="30px"
                color="green"
                left="50%"
                css={`
                    transform: translateX(-50%);
                    text-decoration: none;
                `}
                to="/"
            >
                {t('Back to Home')}
            </Text>
        </Box>
    );
}
