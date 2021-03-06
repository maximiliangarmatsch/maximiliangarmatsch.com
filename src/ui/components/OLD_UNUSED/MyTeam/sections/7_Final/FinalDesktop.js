import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Text } from '../../../../Base/Base';
import Line from '../../components/Line';
import IconCheckpoint from '../../Icons/IconCheckpoint';

export default function FinalDesktop() {
    const { t } = useTranslation();
    return (
        <Box id="Final" height="70vh" position="relative">
            <Line
                absolute={true}
                position="vertical"
                length="130px"
                left="50%"
                size="3px"
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
                fontSize="42px"
                lineHeight="46px"
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
            <Link to="/">
                <Box
                    position="absolute"
                    bottom="30px"
                    color="green"
                    left="50%"
                    css={`
                        transform: translateX(-50%);
                        text-decoration: none;
                    `}
                >
                    {t('Back to Home')}
                </Box>
            </Link>
        </Box>
    );
}
