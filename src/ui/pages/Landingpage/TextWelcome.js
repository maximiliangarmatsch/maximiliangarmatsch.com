import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Text } from '../../components/Base/Base';

export default function TextWelcome() {
    const { t } = useTranslation();

    return (
        <Box>
            <Text
                as="p"
                color="green"
                fontWeight="600"
                lineHeight={{
                    _: '28px',
                    sm: '28px',
                    md: '38px',
                    lg: '45px',
                    xl: '50px',
                    xxl: '72px',
                }}
                fontSize={{
                    _: '28px',
                    sm: '28px',
                    md: '40px',
                    lg: '42px',
                    xl: '45px',
                    xxl: '66px',
                }}
                textAlign="left"
                m={0}
                p={0}
            >
                {t('I create custom')}
                <br />
                {t('software solutions')}
            </Text>
            <Text
                as="p"
                color="white"
                lineHeight={{
                    _: '24px',
                    sm: '24px',
                    md: '30px',
                    lg: '25px',
                    xl: '25px',
                    xxl: '48px',
                }}
                fontSize={{
                    _: '18px',
                    sm: '14px',
                    md: '20px',
                    lg: '22px',
                    xl: '22px',
                    xxl: '35px',
                }}
                textAlign="left"
                fontWeight="300"
                m={0}
                p={0}
            >
                {t('Digital Transformation of Businesses')}
                <br />
                {t('Scalable Web & Mobile Apps')}
                <br />
                {t('Digital Marketing')}
                <br />
                {t('E-Commerce"')}
                <br />
            </Text>
        </Box>
    );
}
